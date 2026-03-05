import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Button } from './components/ui/button';
import { Navbar } from './components/Navbar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';
import { User, MapPin, FileText, Send } from 'lucide-react';

export default function BhoomiForm() {
  const [formData, setFormData] = useState({
    applicantName: '',
    applicantPhone: '',
    applicantAddress: '',
    applicantGuardian: '',
    subdivision: '',
    circle: '',
    halka: '',
    mouja: '',
    khata: '',
    thana: '',
    plot: '',
    complaintType: '',
    subject: '',
    details: '',
    fileName: '',
    firFileName: '',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field, e) => {
    const file = e.target.files[0];
    if (file) {
      handleChange(field, file.name);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9FB] font-sans pb-12">
      <Navbar />

      <div className="mx-auto max-w-6xl space-y-6 mt-8 px-4 md:px-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Submit Request</h1>
          <p className="text-muted-foreground mt-1">District: {import.meta.env.VITE_DISTRICT || 'Munger'}, Bihar</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Applicant Details Card */}
            <Card className="border-none shadow-sm ring-1 ring-slate-200">
              <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <User className="h-5 w-5 text-slate-400" />
                  Applicant Details
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Name *</Label>
                  <Input
                    placeholder="Enter applicant name"
                    value={formData.applicantName}
                    onChange={(e) => handleChange('applicantName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Phone No. *</Label>
                  <Input
                    placeholder="Enter phone number"
                    value={formData.applicantPhone}
                    onChange={(e) => handleChange('applicantPhone', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Address *</Label>
                  <Input
                    placeholder="Enter full address"
                    value={formData.applicantAddress}
                    onChange={(e) => handleChange('applicantAddress', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Father/Husband Name *</Label>
                  <Input
                    placeholder="Enter father/husband name"
                    value={formData.applicantGuardian}
                    onChange={(e) => handleChange('applicantGuardian', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Bhoomi Ka Byora Card */}
            <Card className="border-none shadow-sm ring-1 ring-slate-200">
              <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="h-5 w-5 text-slate-400" />
                  Bhoomi Ka Byora
                </CardTitle>
                <CardDescription>Enter the official land records.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Subdivision *</Label>
                  <Select onValueChange={(val) => handleChange('subdivision', val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Subdivision" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Munger Sadar">Munger Sadar</SelectItem>
                      <SelectItem value="Kharagpur">Kharagpur</SelectItem>
                      <SelectItem value="Tarapur">Tarapur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Circle *</Label>
                  <Select onValueChange={(val) => handleChange('circle', val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Circle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Munger">Munger</SelectItem>
                      <SelectItem value="Jamalpur">Jamalpur</SelectItem>
                      <SelectItem value="Dharhara">Dharhara</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Halka *</Label>
                  <Select onValueChange={(val) => handleChange('halka', val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Halka" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Halka 1">Halka 1</SelectItem>
                      <SelectItem value="Halka 2">Halka 2</SelectItem>
                      <SelectItem value="Halka 3">Halka 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Mouja *</Label>
                  <Select onValueChange={(val) => handleChange('mouja', val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Mouja" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mouja 1">Mouja 1</SelectItem>
                      <SelectItem value="Mouja 2">Mouja 2</SelectItem>
                      <SelectItem value="Mouja 3">Mouja 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Khata Sankhya *</Label>
                  <Input 
                    placeholder="Enter Khata no." 
                    value={formData.khata}
                    onChange={(e) => handleChange('khata', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Thana Sankhya *</Label>
                  <Input 
                    placeholder="Enter Thana no." 
                    value={formData.thana}
                    onChange={(e) => handleChange('thana', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Khesra *</Label>
                  <Input 
                    placeholder="Enter Khesra no." 
                    value={formData.plot}
                    onChange={(e) => handleChange('plot', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Complaint Information Card */}
            <Card className="border-none shadow-sm ring-1 ring-slate-200">
              <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <User className="h-5 w-5 text-slate-400" />
                  Complaint Information
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Type of Complaint *</Label>
                    <Select onValueChange={(val) => handleChange('complaintType', val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Bhoomi Vivvad">Bhoomi Vivvad</SelectItem>
                        <SelectItem value="Encroachment">Encroachment</SelectItem>
                        <SelectItem value="Boundary Dispute">Boundary Dispute</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Subject *</Label>
                    <Input 
                      placeholder="Brief subject of dispute" 
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Details (optional)</Label>
                  <Textarea 
                    placeholder="Provide additional context regarding the land dispute..." 
                    className="min-h-[120px] resize-y"
                    value={formData.details}
                    onChange={(e) => handleChange('details', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Document Upload</Label>
                  <div className="rounded-md border border-dashed border-slate-300 p-6 flex flex-col items-center justify-center text-center bg-slate-50/50 transition-colors hover:bg-slate-100/50">
                    <div className="flex flex-col items-center text-sm text-slate-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-slate-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-slate-900 focus-within:ring-offset-2 hover:text-slate-700">
                        <span className="bg-white border px-4 py-2 rounded-md shadow-sm">Choose File</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e) => handleFileUpload('fileName', e)} />
                      </label>
                      <p className="mt-3">or drag and drop</p>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">PDF or image up to 10MB</p>
                    {formData.fileName && (
                      <p className="text-sm font-medium text-slate-900 mt-4 bg-white px-3 py-1 rounded-md border inline-block">
                        Selected: {formData.fileName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>FIR (if registered)</Label>
                  <div className="rounded-md border border-dashed border-slate-300 p-6 flex flex-col items-center justify-center text-center bg-slate-50/50 transition-colors hover:bg-slate-100/50">
                    <div className="flex flex-col items-center text-sm text-slate-600">
                      <label htmlFor="fir-upload" className="relative cursor-pointer rounded-md font-medium text-slate-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-slate-900 focus-within:ring-offset-2 hover:text-slate-700">
                        <span className="bg-white border px-4 py-2 rounded-md shadow-sm">Choose File</span>
                        <input id="fir-upload" name="fir-upload" type="file" className="sr-only" onChange={(e) => handleFileUpload('firFileName', e)} />
                      </label>
                      <p className="mt-3">or drag and drop</p>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">PDF or image up to 10MB</p>
                    {formData.firFileName && (
                      <p className="text-sm font-medium text-slate-900 mt-4 bg-white px-3 py-1 rounded-md border inline-block">
                        Selected: {formData.firFileName}
                      </p>
                    )}
                  </div>
                </div>

              </CardContent>
            </Card>

          </div>

          {/* Sidebar / Live Preview Column */}
          <div className="space-y-6 lg:sticky lg:top-24 h-max">
            <Card className="border-none shadow-sm ring-1 ring-slate-200">
              <CardHeader className="bg-slate-900 text-white rounded-t-xl pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Live Preview</CardTitle>
                  <span className="text-xs text-slate-400 font-mono tracking-wider">AUTO</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4 text-sm">
                
                <div className="flex gap-4 border-b pb-2">
                  <div className="w-1/2 flex flex-col gap-1 border-r border-slate-200 pr-4">
                    <span className="text-slate-500">Applicant</span>
                    <span className="font-medium text-slate-900 truncate">{formData.applicantName || "—"}</span>
                  </div>
                  <div className="w-1/2 flex flex-col gap-1">
                    <span className="text-slate-500">Phone</span>
                    <span className="font-medium text-slate-900 truncate">{formData.applicantPhone || "—"}</span>
                  </div>
                </div>

                <div className="flex gap-4 border-b pb-2">
                  <div className="w-1/2 flex flex-col gap-1 border-r border-slate-200 pr-4">
                    <span className="text-slate-500">Address</span>
                    <span className="font-medium text-slate-900 truncate">{formData.applicantAddress || "—"}</span>
                  </div>
                  <div className="w-1/2 flex flex-col gap-1">
                    <span className="text-slate-500">Father/Husband</span>
                    <span className="font-medium text-slate-900 truncate">{formData.applicantGuardian || "—"}</span>
                  </div>
                </div>

                <div className="flex gap-4 border-b pb-2">
                  <div className="w-1/2 flex flex-col gap-1 border-r border-slate-200 pr-4">
                    <span className="text-slate-500">Subdivision</span>
                    <span className="font-medium text-slate-900 truncate">{formData.subdivision || "—"}</span>
                  </div>
                  <div className="w-1/2 flex flex-col gap-1">
                    <span className="text-slate-500">Circle</span>
                    <span className="font-medium text-slate-900 truncate">{formData.circle || "—"}</span>
                  </div>
                </div>

                <div className="flex gap-4 border-b pb-2">
                  <div className="w-1/2 flex flex-col gap-1 border-r border-slate-200 pr-4">
                    <span className="text-slate-500">Halka</span>
                    <span className="font-medium text-slate-900 truncate">{formData.halka || "—"}</span>
                  </div>
                  <div className="w-1/2 flex flex-col gap-1">
                    <span className="text-slate-500">Mouja</span>
                    <span className="font-medium text-slate-900 truncate">{formData.mouja || "—"}</span>
                  </div>
                </div>
                
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Khata / Thana / Plot</span>
                  <span className="font-medium text-slate-900 text-right">
                    {formData.khata || formData.thana || formData.plot 
                      ? `${formData.khata || "?"} / ${formData.thana || "?"} / ${formData.plot || "?"}` 
                      : "—"}
                  </span>
                </div>

                <div className="flex flex-col gap-1 border-b pb-2">
                  <span className="text-slate-500">Type</span>
                  <span className="font-medium text-slate-900">{formData.complaintType || "—"}</span>
                </div>

                <div className="flex flex-col gap-1 border-b pb-2">
                  <span className="text-slate-500">Subject</span>
                  <span className="font-medium text-slate-900 line-clamp-2">{formData.subject || "—"}</span>
                </div>

                <div className="flex flex-col gap-1 border-b pb-2">
                  <span className="text-slate-500">Details</span>
                  <span className="font-medium text-slate-900 line-clamp-3 overflow-hidden text-ellipsis">{formData.details || "—"}</span>
                </div>

                <div className="flex justify-between pb-2">
                  <span className="text-slate-500">Attachment</span>
                  <span className="font-medium text-slate-900 text-right max-w-[150px] truncate">{formData.fileName || "—"}</span>
                </div>

                <div className="flex justify-between pb-2">
                  <span className="text-slate-500">FIR</span>
                  <span className="font-medium text-slate-900 text-right max-w-[150px] truncate">{formData.firFileName || "—"}</span>
                </div>

                <div className="pt-4 mt-2 border-t flex justify-end">
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white shadow-sm transition-all duration-200 gap-2">
                    <Send className="w-4 h-4" />
                    Submit Request
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm ring-1 ring-slate-200 bg-slate-50/50 mt-6">
              <CardContent className="pt-6 text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900 block mb-2">A copy of this application will be sent to:</span>
                <ul className="list-disc list-inside space-y-1 ml-1 text-slate-500">
                  <li>DM (District Magistrate)</li>
                  <li>SP (Superintendent of Police)</li>
                  <li>ADM (Additional District Magistrate)</li>
                  <li>DSP (Deputy Superintendent of Police)</li>
                  <li>CP (Commissioner of Police)</li>
                  <li>SDO {formData.subdivision ? `(${formData.subdivision})` : ''}</li>
                  <li>CO {formData.circle ? `(${formData.circle})` : ''}</li>
                  <li>Halka Karmachari {formData.halka ? `(${formData.halka})` : ''}</li>
                  <li>Police Thanadhyaksh {formData.thana ? `(Thana No. ${formData.thana})` : ''}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
