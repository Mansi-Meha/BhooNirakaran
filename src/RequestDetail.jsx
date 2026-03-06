import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  User,
  MapPin,
  FileText,
  Upload,
  CheckCircle2,
  Clock,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Paperclip,
  X,
  Shield,
  Scale,
  Landmark,
  UserCheck,
  Briefcase,
  BadgeCheck,
} from 'lucide-react';
import { Navbar } from './components/Navbar';

// ─── Seed data (mirrors Dashboard ALL_ROWS, extended with extra fields) ────────
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

// ─── Stakeholder configuration ─────────────────────────────────────────────────
const STAKEHOLDERS = [
  {
    id: 'dm',
    role: 'DM',
    fullName: 'District Magistrate',
    icon: Landmark,
    color: 'bg-violet-50 border-violet-200 text-violet-700',
    iconBg: 'bg-violet-100 text-violet-600',
    badgeColor: 'bg-violet-600',
    description: 'Upload official orders, hearing notes, and final directives.',
  },
  {
    id: 'sp',
    role: 'SP',
    fullName: 'Superintendent of Police',
    icon: Shield,
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    iconBg: 'bg-blue-100 text-blue-600',
    badgeColor: 'bg-blue-600',
    description: 'Upload law & order assessment, police action report.',
  },
  {
    id: 'adm',
    role: 'ADM',
    fullName: 'Additional District Magistrate',
    icon: Briefcase,
    color: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    iconBg: 'bg-indigo-100 text-indigo-600',
    badgeColor: 'bg-indigo-600',
    description: 'Upload revenue court records and administrative findings.',
  },
  {
    id: 'sdo',
    role: 'SDO',
    fullName: 'Sub-Divisional Officer',
    icon: Landmark,
    color: 'bg-cyan-50 border-cyan-200 text-cyan-700',
    iconBg: 'bg-cyan-100 text-cyan-600',
    badgeColor: 'bg-cyan-600',
    description: 'Upload sub-division level field inquiry report.',
  },
  {
    id: 'dclr',
    role: 'DCLR',
    fullName: 'Deputy Collector Land Reforms',
    icon: Scale,
    color: 'bg-teal-50 border-teal-200 text-teal-700',
    iconBg: 'bg-teal-100 text-teal-600',
    badgeColor: 'bg-teal-600',
    description: 'Upload land reform verification, jamabandi correction report.',
  },
  {
    id: 'dsp',
    role: 'DSP',
    fullName: 'Deputy Superintendent of Police',
    icon: Shield,
    color: 'bg-sky-50 border-sky-200 text-sky-700',
    iconBg: 'bg-sky-100 text-sky-600',
    badgeColor: 'bg-sky-600',
    description: 'Upload crime branch inquiry report and FIR status.',
  },
  {
    id: 'co',
    role: 'CO',
    fullName: 'Circle Officer',
    icon: UserCheck,
    color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    iconBg: 'bg-emerald-100 text-emerald-600',
    badgeColor: 'bg-emerald-600',
    description: 'Upload circle-level land measurement and field report.',
  },
  {
    id: 'pi',
    role: 'Police Inspector',
    fullName: 'Police Inspector (Thana)',
    icon: BadgeCheck,
    color: 'bg-orange-50 border-orange-200 text-orange-700',
    iconBg: 'bg-orange-100 text-orange-600',
    badgeColor: 'bg-orange-600',
    description: 'Upload FIR copy, station diary entries, investigation notes.',
  },
  {
    id: 'hk',
    role: 'Halka Karmchari',
    fullName: 'Halka Karmchari',
    icon: MapPin,
    color: 'bg-amber-50 border-amber-200 text-amber-700',
    iconBg: 'bg-amber-100 text-amber-600',
    badgeColor: 'bg-amber-600',
    description: 'Upload land records, khata-khesra documents, field verification.',
  },
];

const statusStyles = {
  Processing: { pill: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-400', icon: Clock },
  Compliance: { pill: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-400', icon: CheckCircle2 },
  Received:   { pill: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-400', icon: AlertCircle },
};

// ─── Reusable upload zone ──────────────────────────────────────────────────────
function UploadZone({ stakeholderId, uploads, onUpload, onRemove }) {
  const files = uploads[stakeholderId] || [];
  const inputRef = React.useRef(null);

  const handleFiles = (newFiles) => {
    const arr = Array.from(newFiles).map((f) => ({
      name: f.name,
      size: f.size,
      type: f.type,
      id: `${Date.now()}-${Math.random()}`,
    }));
    onUpload(stakeholderId, arr);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const fmt = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="space-y-3">
      {/* Drop zone */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className="group flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/60 px-4 py-6 text-center cursor-pointer transition-all hover:border-slate-400 hover:bg-slate-100/60 active:scale-[0.99]"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200 group-hover:ring-slate-400 transition-all">
          <Upload className="h-4 w-4 text-slate-500" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-700">Click or drag files here</p>
          <p className="text-xs text-slate-400 mt-0.5">PDF, JPG, PNG — up to 10 MB each</p>
        </div>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          className="sr-only"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {/* Uploaded file list */}
      {files.length > 0 && (
        <ul className="space-y-2">
          {files.map((f) => (
            <li
              key={f.id}
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2.5 shadow-sm"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-100">
                <Paperclip className="h-3.5 w-3.5 text-slate-500" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-slate-800">{f.name}</p>
                <p className="text-xs text-slate-400">{fmt(f.size)}</p>
              </div>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); onRemove(stakeholderId, f.id); }}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── Stakeholder card ──────────────────────────────────────────────────────────
function StakeholderCard({ stakeholder, uploads, onUpload, onRemove }) {
  const [open, setOpen] = useState(false);
  const Icon = stakeholder.icon;
  const fileCount = (uploads[stakeholder.id] || []).length;

  return (
    <div className={`rounded-2xl border bg-white shadow-sm overflow-hidden transition-all duration-200 ${open ? 'ring-2 ring-slate-900/10' : ''}`}>
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 px-5 py-4 hover:bg-slate-50/70 transition-colors text-left"
      >
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${stakeholder.iconBg}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900 text-sm">{stakeholder.role}</span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-slate-500 truncate">{stakeholder.fullName}</span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5 truncate">{stakeholder.description}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {fileCount > 0 && (
            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold text-white ${stakeholder.badgeColor}`}>
              {fileCount} file{fileCount > 1 ? 's' : ''}
            </span>
          )}
          {open ? (
            <ChevronUp className="h-4 w-4 text-slate-400" />
          ) : (
            <ChevronDown className="h-4 w-4 text-slate-400" />
          )}
        </div>
      </button>

      {/* Expandable upload section */}
      {open && (
        <div className={`border-t px-5 py-4 ${stakeholder.color.split(' ')[0]}`}>
          <UploadZone
            stakeholderId={stakeholder.id}
            uploads={uploads}
            onUpload={onUpload}
            onRemove={onRemove}
          />
        </div>
      )}
    </div>
  );
}

// ─── Info field display ────────────────────────────────────────────────────────
function InfoField({ label, value }) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{label}</p>
      <p className="text-sm font-medium text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 min-h-[36px]">
        {value || <span className="text-slate-300">—</span>}
      </p>
    </div>
  );
}

// ─── Main RequestDetail page ───────────────────────────────────────────────────
export default function RequestDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const row = ALL_ROWS.find((r) => r.id === Number(id));

  // Per-stakeholder uploads: { [stakeholderId]: [{ id, name, size, type }] }
  const [uploads, setUploads] = useState({});

  const handleUpload = (stakeholderId, newFiles) => {
    setUploads((prev) => ({
      ...prev,
      [stakeholderId]: [...(prev[stakeholderId] || []), ...newFiles],
    }));
  };

  const handleRemove = (stakeholderId, fileId) => {
    setUploads((prev) => ({
      ...prev,
      [stakeholderId]: (prev[stakeholderId] || []).filter((f) => f.id !== fileId),
    }));
  };

  const totalUploads = Object.values(uploads).reduce((s, arr) => s + arr.length, 0);

  if (!row) {
    return (
      <div className="min-h-screen bg-[#F9F9FB] flex flex-col">
        <Navbar onBack={() => navigate('/dashboard')} rightLabel="Request Detail" />
        <div className="flex flex-1 items-center justify-center text-slate-400 text-sm">
          Request not found.
        </div>
      </div>
    );
  }

  const ss = statusStyles[row.status] || statusStyles.Received;
  const StatusIcon = ss.icon;

  return (
    <div className="min-h-screen bg-[#F9F9FB] font-sans pb-16">
      <Navbar onBack={() => navigate('/dashboard')} rightLabel="Request Detail" />

      <div className="mx-auto max-w-5xl px-4 md:px-8 mt-6 space-y-6">

        {/* ── Breadcrumb + Status bar ── */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${ss.pill}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${ss.dot}`} />
              {row.status}
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 border border-slate-200">
              {row.complaintType}
            </span>
            <span className="text-xs text-slate-400">
              Submitted: <span className="text-slate-600 font-medium">{row.submittedOn}</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Request ID:</span>
            <span className="font-mono font-semibold text-slate-800 bg-white border border-slate-200 rounded-md px-2 py-0.5">
              #{String(row.id).padStart(4, '0')}
            </span>
          </div>
        </div>

        {/* ── Subject ── */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 leading-tight">
            {row.subject}
          </h1>
          {row.details && (
            <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-3xl">{row.details}</p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* ── Left: Case details ── */}
          <div className="lg:col-span-3 space-y-5">

            {/* Applicant Details */}
            <section className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
              <div className="flex items-center gap-2 bg-slate-50 border-b border-slate-100 px-5 py-3.5">
                <User className="h-4 w-4 text-slate-400" />
                <h2 className="text-sm font-semibold text-slate-700">Applicant Details</h2>
              </div>
              <div className="p-5 grid grid-cols-2 gap-4">
                <InfoField label="Name" value={row.applicantName} />
                <InfoField label="Phone" value={row.applicantPhone} />
                <InfoField label="Address" value={row.applicantAddress} />
                <InfoField label="Father / Husband" value={row.applicantGuardian} />
              </div>
            </section>

            {/* Bhoomi Ka Byora */}
            <section className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
              <div className="flex items-center gap-2 bg-slate-50 border-b border-slate-100 px-5 py-3.5">
                <MapPin className="h-4 w-4 text-slate-400" />
                <h2 className="text-sm font-semibold text-slate-700">Bhoomi Ka Byora</h2>
              </div>
              <div className="p-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <InfoField label="Subdivision" value={row.subdivision} />
                <InfoField label="Circle" value={row.circle} />
                <InfoField label="Halka" value={row.halka} />
                <InfoField label="Mouja" value={row.mouja} />
                <InfoField label="Khata Sankhya" value={row.khataSankhya} />
                <InfoField label="Thana Sankhya" value={row.thanaSankhya} />
                <InfoField label="Khesra" value={row.khesra} />
              </div>
            </section>

            {/* Complaint Info */}
            <section className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
              <div className="flex items-center gap-2 bg-slate-50 border-b border-slate-100 px-5 py-3.5">
                <FileText className="h-4 w-4 text-slate-400" />
                <h2 className="text-sm font-semibold text-slate-700">Complaint Information</h2>
              </div>
              <div className="p-5 grid grid-cols-2 gap-4">
                <InfoField label="Complaint Type" value={row.complaintType} />
                <InfoField label="Submitted On" value={row.submittedOn} />
                <div className="col-span-2">
                  <InfoField label="Subject" value={row.subject} />
                </div>
                {row.details && (
                  <div className="col-span-2 space-y-1">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Details</p>
                    <p className="text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 leading-relaxed">
                      {row.details}
                    </p>
                  </div>
                )}
              </div>
            </section>

          </div>

          {/* ── Right: Summary sidebar ── */}
          <div className="lg:col-span-2 space-y-5 lg:sticky lg:top-6 h-max">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
              <div className="bg-slate-900 px-5 py-4">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">Case Summary</p>
                <p className="text-white font-semibold mt-1 truncate">{row.applicantName}</p>
              </div>
              <div className="p-5 space-y-3 text-sm">
                <div className="flex justify-between items-start">
                  <span className="text-slate-500">Status</span>
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${ss.pill}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${ss.dot}`} />
                    {row.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Type</span>
                  <span className="font-medium text-slate-800 text-right max-w-[140px]">{row.complaintType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Subdivision</span>
                  <span className="font-medium text-slate-800">{row.subdivision}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Circle</span>
                  <span className="font-medium text-slate-800">{row.circle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Khata / Thana / Khesra</span>
                  <span className="font-mono text-xs font-medium text-slate-700">
                    {row.khataSankhya} / {row.thanaSankhya} / {row.khesra}
                  </span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="text-slate-500">Docs uploaded</span>
                  <span className={`font-bold ${totalUploads > 0 ? 'text-emerald-600' : 'text-slate-400'}`}>
                    {totalUploads}
                  </span>
                </div>
              </div>
            </div>

            {/* Progress — how many stakeholders have uploaded */}
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-5 space-y-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Upload Progress</p>
              <div className="space-y-2">
                {STAKEHOLDERS.map((s) => {
                  const count = (uploads[s.id] || []).length;
                  const Icon = s.icon;
                  return (
                    <div key={s.id} className="flex items-center gap-3">
                      <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${s.iconBg}`}>
                        <Icon className="h-3 w-3" />
                      </div>
                      <span className="text-xs text-slate-600 flex-1">{s.role}</span>
                      {count > 0 ? (
                        <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                          <CheckCircle2 className="h-3 w-3" />
                          {count}
                        </span>
                      ) : (
                        <span className="text-xs text-slate-300">Pending</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── Stakeholder Document Upload Portal ── */}
        <section>
          <div className="mb-4">
            <h2 className="text-lg font-bold text-slate-900">Stakeholder Document Portal</h2>
            <p className="text-sm text-slate-500 mt-0.5">
              Each stakeholder can independently upload their relevant documents. All submissions are recorded asynchronously for review.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {STAKEHOLDERS.map((s) => (
              <StakeholderCard
                key={s.id}
                stakeholder={s}
                uploads={uploads}
                onUpload={handleUpload}
                onRemove={handleRemove}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
