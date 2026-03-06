import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';
import {
  BarChart3,
  Search,
  Filter,
  Plus,
  ArrowUpRight,
  Download,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Inbox,
  Activity,
  Calendar,
} from 'lucide-react';

// ─── Static seed data matching BhoomiForm fields ──────────────────────────────
const ALL_ROWS = [
  {
    id: 1,
    applicantName: 'Vikash Kumar',
    applicantPhone: '8544367770',
    applicantAddress: 'Village Rampur, Munger',
    applicantGuardian: 'Ramesh Kumar',
    subdivision: 'Munger Sadar',
    circle: 'Munger',
    halka: 'Halka 1',
    mouja: 'Mouja 1',
    khataSankhya: '123',
    thanaSankhya: '45',
    khesra: '789',
    complaintType: 'Bhoomi Vivvad',
    subject: 'Unauthorised occupation of land',
    details: 'The applicant reports that the adjacent landowner has illegally fenced off approximately 0.5 acres of survey plot 789, blocking access to the applicant\'s agricultural land.',
    status: 'Processing',
    submittedOn: '2026-03-06',
  },
  {
    id: 2,
    applicantName: 'Sunita Devi',
    applicantPhone: '9876543210',
    applicantAddress: 'Mohalla Jamalpur, Munger',
    applicantGuardian: 'Suresh Prasad',
    subdivision: 'Kharagpur',
    circle: 'Jamalpur',
    halka: 'Halka 2',
    mouja: 'Mouja 2',
    khataSankhya: '456',
    thanaSankhya: '78',
    khesra: '321',
    complaintType: 'Encroachment',
    subject: 'Boundary wall demolished by neighbour',
    details: 'The applicant states that on 20th Feb 2026, the neighbouring party demolished the existing boundary wall and extended their construction into the applicant\'s registered plot.',
    status: 'Compliance',
    submittedOn: '2026-02-26',
  },
  {
    id: 3,
    applicantName: 'Arun Sharma',
    applicantPhone: '7700112233',
    applicantAddress: 'Ward 5, Tarapur',
    applicantGuardian: 'Mohan Sharma',
    subdivision: 'Tarapur',
    circle: 'Dharhara',
    halka: 'Halka 3',
    mouja: 'Mouja 3',
    khataSankhya: '789',
    thanaSankhya: '11',
    khesra: '555',
    complaintType: 'Boundary Dispute',
    subject: 'Dispute over survey demarcation',
    details: 'The applicant disputes the survey demarcation carried out in January 2026, stating that the new survey markers do not match historical jamabandi records.',
    status: 'Received',
    submittedOn: '2026-01-15',
  },
];

const statusCounts = (rows) => ({
  total:      rows.length,
  received:   rows.filter((r) => r.status === 'Received').length,
  processing: rows.filter((r) => r.status === 'Processing').length,
  compliance: rows.filter((r) => r.status === 'Compliance').length,
});

const statusStyles = {
  Processing: 'bg-orange-50 text-orange-700 border-orange-200',
  Compliance: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Received:   'bg-blue-50 text-blue-700 border-blue-200',
};

// ─── Shared styled date-input wrapper ─────────────────────────────────────────
function DateInputBox({ type, value, onChange, id }) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={[
          'w-full rounded-lg border border-slate-200 bg-white px-3 py-2',
          'text-sm text-slate-800 shadow-sm',
          'focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent',
          'transition-shadow duration-150',
          /* push browser's native calendar icon out of view, ours sits on top */
          '[&::-webkit-calendar-picker-indicator]:opacity-0',
          '[&::-webkit-calendar-picker-indicator]:absolute',
          '[&::-webkit-calendar-picker-indicator]:inset-0',
          '[&::-webkit-calendar-picker-indicator]:w-full',
          '[&::-webkit-calendar-picker-indicator]:h-full',
          '[&::-webkit-calendar-picker-indicator]:cursor-pointer',
          'pr-9',
        ].join(' ')}
      />
      {/* Lucide Calendar icon — purely decorative, pointer-events blocked so the
          native picker overlay (which covers the whole input) handles the click */}
      <Calendar
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        size={16}
        strokeWidth={1.75}
      />
    </div>
  );
}

// ─── Inline scope sub-controls ────────────────────────────────────────────────
function ScopeControls({ scope, scopeParams, onScopeParamsChange }) {
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);
  const fmt = (d) => d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });

  if (scope === 'Month') {
    return (
      <div className="mt-2">
        <DateInputBox
          id="scope-month"
          type="month"
          value={scopeParams.month || ''}
          onChange={(e) => onScopeParamsChange({ month: e.target.value })}
        />
      </div>
    );
  }

  if (scope === 'Date') {
    return (
      <div className="mt-2">
        <DateInputBox
          id="scope-date"
          type="date"
          value={scopeParams.date || ''}
          onChange={(e) => onScopeParamsChange({ date: e.target.value })}
        />
      </div>
    );
  }

  if (scope === 'Last 7 Days') {
    return (
      <p className="mt-2 text-xs text-slate-500">
        Automatically selects: {fmt(sevenDaysAgo)} to {fmt(today)}
      </p>
    );
  }

  if (scope === 'Range') {
    return (
      <div className="mt-2 flex gap-3">
        <div className="flex-1">
          <DateInputBox
            id="scope-from"
            type="date"
            value={scopeParams.from || ''}
            onChange={(e) => onScopeParamsChange({ ...scopeParams, from: e.target.value })}
          />
          <p className="text-xs text-slate-400 mt-1 pl-1">From</p>
        </div>
        <div className="flex-1">
          <DateInputBox
            id="scope-to"
            type="date"
            value={scopeParams.to || ''}
            onChange={(e) => onScopeParamsChange({ ...scopeParams, to: e.target.value })}
          />
          <p className="text-xs text-slate-400 mt-1 pl-1">To</p>
        </div>
      </div>
    );
  }

  return null;
}

// ─── Dashboard ────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const navigate = useNavigate();

  const [search, setSearch]               = useState('');
  const [scope, setScope]                 = useState('All');
  const [scopeParams, setScopeParams]     = useState({});
  const [filters, setFilters]             = useState({
    status:          'All',
    complaintType:   'All',
    subdivision:     'All',
  });

  const handleFilterChange = (field, value) =>
    setFilters((prev) => ({ ...prev, [field]: value }));

  const clearFilters = () => {
    setFilters({ status: 'All', complaintType: 'All', subdivision: 'All' });
    setSearch('');
    setScope('All');
    setScopeParams({});
  };

  // ── Filtering logic ──────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return ALL_ROWS.filter((row) => {
      // Search
      if (search.trim()) {
        const q = search.toLowerCase().replace(/[^a-z0-9\s]/g, '');
        const haystack = [
          row.applicantName,
          row.applicantPhone,
          row.subject,
          row.khataSankhya,
          row.khesra,
        ].join(' ').toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      // Scope filter
      const rowDate = new Date(row.submittedOn);
      if (scope === 'Month' && scopeParams.month) {
        // scopeParams.month is "YYYY-MM"
        const [y, m] = scopeParams.month.split('-').map(Number);
        if (rowDate.getFullYear() !== y || rowDate.getMonth() + 1 !== m) return false;
      }
      if (scope === 'Date' && scopeParams.date) {
        if (row.submittedOn !== scopeParams.date) return false;
      }
      if (scope === 'Last 7 Days') {
        const cutoff = new Date(today);
        cutoff.setDate(cutoff.getDate() - 7);
        if (rowDate < cutoff) return false;
      }
      if (scope === 'Range') {
        if (scopeParams.from && rowDate < new Date(scopeParams.from)) return false;
        if (scopeParams.to   && rowDate > new Date(scopeParams.to))   return false;
      }

      // Dropdown filters
      if (filters.status        !== 'All' && row.status        !== filters.status)        return false;
      if (filters.complaintType !== 'All' && row.complaintType !== filters.complaintType) return false;
      if (filters.subdivision   !== 'All' && row.subdivision   !== filters.subdivision)   return false;

      return true;
    });
  }, [search, scope, scopeParams, filters]);

  const counts = useMemo(() => statusCounts(filtered), [filtered]);

  return (
    <div className="min-h-screen bg-[#F9F9FB] font-sans pb-16">
      <Navbar />

      <div className="mx-auto max-w-6xl space-y-6 mt-8 px-4 md:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              <BarChart3 className="h-3.5 w-3.5" />
              Dashboard
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mt-3">
              BhooNirakaran Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              District: <span className="font-semibold text-slate-800">{import.meta.env.VITE_DISTRICT || 'Munger'}</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Graphs
            </Button>
            <Button
              className="gap-2 bg-slate-900 text-white hover:bg-slate-800"
              onClick={() => navigate('/request')}
            >
              <Plus className="h-4 w-4" />
              New Request
            </Button>
          </div>
        </div>

        {/* ── Stat Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total (current)', value: counts.total,      icon: <BarChart3 className="h-5 w-5" />,      bg: 'bg-slate-100',   fg: 'text-slate-600' },
            { label: 'Received',        value: counts.received,   icon: <Inbox className="h-5 w-5" />,         bg: 'bg-blue-50',     fg: 'text-blue-600'  },
            { label: 'Processing',      value: counts.processing, icon: <Activity className="h-5 w-5" />,      bg: 'bg-orange-50',   fg: 'text-orange-600'},
            { label: 'Compliance',      value: counts.compliance, icon: <CheckCircle2 className="h-5 w-5" />,  bg: 'bg-emerald-50',  fg: 'text-emerald-600'},
          ].map(({ label, value, icon, bg, fg }) => (
            <Card key={label} className="border-none shadow-sm ring-1 ring-slate-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">{label}</p>
                    <p className="text-3xl font-semibold text-slate-900 mt-2">{value}</p>
                  </div>
                  <span className={`h-10 w-10 rounded-lg ${bg} ${fg} flex items-center justify-center`}>
                    {icon}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ── Search + Filters Card ── */}
        <Card className="border-none shadow-sm ring-1 ring-slate-200">
          <CardContent className="pt-6 space-y-5">

            {/* Search & Scope row */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search — left */}
              <div className="flex-1 space-y-2">
                <Label>Search (Applicant Name / Phone / Subject)</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    className="pl-9"
                    placeholder="Type name, phone number or subject…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <p className="text-xs text-slate-500">Searches Applicant Name, Phone, Subject, Khata &amp; Khesra.</p>
              </div>

              {/* Scope — right, fixed width so buttons never wrap */}
              <div className="shrink-0 space-y-2">
                <Label>Scope</Label>
                <div className="flex gap-2">
                  {['All', 'Month', 'Date', 'Last 7 Days', 'Range'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setScope(item);
                        const now = new Date();
                        if (item === 'Date') {
                          const yyyy = now.getFullYear();
                          const mm   = String(now.getMonth() + 1).padStart(2, '0');
                          const dd   = String(now.getDate()).padStart(2, '0');
                          setScopeParams({ date: `${yyyy}-${mm}-${dd}` });
                        } else if (item === 'Month') {
                          const yyyy = now.getFullYear();
                          const mm   = String(now.getMonth() + 1).padStart(2, '0');
                          setScopeParams({ month: `${yyyy}-${mm}` });
                        } else if (item === 'Range') {
                          const sevenAgo = new Date(now);
                          sevenAgo.setDate(now.getDate() - 6);
                          const toISO  = (d) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
                          setScopeParams({ from: toISO(sevenAgo), to: toISO(now) });
                        } else {
                          setScopeParams({});
                        }
                      }}
                      className={`whitespace-nowrap px-3 py-2 text-sm rounded-md border transition-colors ${
                        scope === item
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-100 text-slate-600 border-slate-100 hover:bg-slate-200'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                {/* Inline sub-controls — no box, just inputs flush under the buttons */}
                <ScopeControls scope={scope} scopeParams={scopeParams} onScopeParamsChange={setScopeParams} />
              </div>
            </div>

            {/* Filters row */}
            <div>
              <div className="flex items-center gap-2 text-slate-600 mb-3">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filters</span>
              </div>
              <div className="flex flex-wrap gap-4 items-end">
                <div className="space-y-2 min-w-[140px]">
                  <Label>Status</Label>
                  <Select value={filters.status} onValueChange={(v) => handleFilterChange('status', v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All</SelectItem>
                      <SelectItem value="Received">Received</SelectItem>
                      <SelectItem value="Processing">Processing</SelectItem>
                      <SelectItem value="Compliance">Compliance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 min-w-[180px]">
                  <Label>Complaint Type</Label>
                  <Select value={filters.complaintType} onValueChange={(v) => handleFilterChange('complaintType', v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All</SelectItem>
                      <SelectItem value="Bhoomi Vivvad">Bhoomi Vivvad</SelectItem>
                      <SelectItem value="Encroachment">Encroachment</SelectItem>
                      <SelectItem value="Boundary Dispute">Boundary Dispute</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 min-w-[160px]">
                  <Label>Subdivision</Label>
                  <Select value={filters.subdivision} onValueChange={(v) => handleFilterChange('subdivision', v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All</SelectItem>
                      <SelectItem value="Munger Sadar">Munger Sadar</SelectItem>
                      <SelectItem value="Kharagpur">Kharagpur</SelectItem>
                      <SelectItem value="Tarapur">Tarapur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="secondary" className="h-10" onClick={clearFilters}>
                  Clear
                </Button>
              </div>
            </div>

            <p className="text-sm text-slate-500">Showing {filtered.length} result(s)</p>
          </CardContent>
        </Card>

        {/* ── Download + count row ── */}
        <div className="flex items-center justify-between">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download Excel
            <span className="text-xs text-slate-500 ml-1">({filtered.length})</span>
          </Button>
          <p className="text-sm text-slate-500">
            Showing 1 to {filtered.length} of {filtered.length}
          </p>
        </div>

        {/* ── Letter List Table ── */}
        <Card className="border-none shadow-sm ring-1 ring-slate-200">
          <CardHeader className="flex-row items-center justify-between border-b border-slate-100">
            <CardTitle className="text-lg">Complaint List</CardTitle>
            <span className="text-sm text-slate-500">Showing 1 to {filtered.length} of {filtered.length}</span>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2 text-xs uppercase text-slate-500 font-semibold whitespace-nowrap">#</th>
                    <th className="text-left py-3 px-2 text-xs uppercase text-slate-500 font-semibold whitespace-nowrap">Applicant</th>
                    <th className="text-left py-3 px-2 text-xs uppercase text-slate-500 font-semibold whitespace-nowrap">Bhoomi Ka Byora</th>
                    <th className="text-left py-3 px-2 text-xs uppercase text-slate-500 font-semibold whitespace-nowrap">Complaint Type</th>
                    <th className="text-left py-3 px-2 text-xs uppercase text-slate-500 font-semibold whitespace-nowrap">Subject</th>
                    <th className="text-left py-3 px-2 text-xs uppercase text-slate-500 font-semibold whitespace-nowrap">Status</th>
                    <th className="text-left py-3 px-2 text-xs uppercase text-slate-500 font-semibold whitespace-nowrap">Submitted On</th>
                    <th className="py-3 px-2"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="py-12 text-center text-slate-400 text-sm">
                        No entries match the current filters.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((row) => (
                      <tr
                        key={row.id}
                        onClick={() => navigate(`/request/${row.id}`)}
                        className="align-top hover:bg-slate-50/60 transition-colors cursor-pointer"
                      >
                        <td className="py-4 px-2 text-slate-500 font-medium">{row.id}</td>

                        {/* Applicant */}
                        <td className="py-4 px-2">
                          <p className="font-semibold text-slate-900">{row.applicantName}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{row.applicantPhone}</p>
                          <p className="text-xs text-slate-400 mt-0.5 max-w-[150px] truncate">{row.applicantAddress}</p>
                          <p className="text-xs text-slate-400 mt-0.5">S/O, W/O: {row.applicantGuardian}</p>
                        </td>

                        {/* Bhoomi Ka Byora */}
                        <td className="py-4 px-2">
                          <p className="font-medium text-slate-900 text-xs">{row.subdivision} / {row.circle}</p>
                          <p className="text-xs text-slate-500 mt-0.5">Halka: {row.halka} &nbsp;|&nbsp; Mouja: {row.mouja}</p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Khata: {row.khataSankhya} &nbsp;|&nbsp; Thana: {row.thanaSankhya} &nbsp;|&nbsp; Khesra: {row.khesra}
                          </p>
                        </td>

                        {/* Complaint Type */}
                        <td className="py-4 px-2">
                          <span className="inline-flex items-center rounded-md bg-slate-100 text-slate-700 px-2 py-1 text-xs font-medium">
                            {row.complaintType}
                          </span>
                        </td>

                        {/* Subject */}
                        <td className="py-4 px-2 max-w-[180px]">
                          <p className="text-slate-900 line-clamp-2">{row.subject}</p>
                        </td>

                        {/* Status */}
                        <td className="py-4 px-2">
                          <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[row.status] || 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                            {row.status}
                          </span>
                        </td>

                        {/* Submitted On */}
                        <td className="py-4 px-2 whitespace-nowrap text-slate-700">
                          {row.submittedOn}
                        </td>

                        {/* Action */}
                        <td className="py-4 px-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-slate-400 hover:text-slate-900"
                            onClick={(e) => { e.stopPropagation(); navigate(`/request/${row.id}`); }}
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t mt-4 pt-4 text-sm text-slate-500">
              <span>Page 1 of 1</span>
              <div className="flex items-center gap-2">
                <Button variant="secondary" size="icon" className="h-8 w-8" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="icon" className="h-8 w-8 bg-slate-900 text-white hover:bg-slate-800">1</Button>
                <Button variant="secondary" size="icon" className="h-8 w-8" disabled>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
