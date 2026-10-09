export const MAX_RESUME_BYTES = 3 * 1024 * 1024;
export const MAX_REQUEST_BYTES = MAX_RESUME_BYTES + 64 * 1024;
export const RESUME_ACCEPT = ".pdf,.doc,.docx";

export function resumeError(file: {
  name: string;
  size: number;
}): string | null {
  if (!/\.(pdf|doc|docx)$/i.test(file.name))
    return "Please use a PDF, DOC, or DOCX resume.";
  if (file.size > MAX_RESUME_BYTES)
    return "Please choose a resume smaller than 3 MB.";
  if (file.size === 0)
    return "This file is empty. Please choose another resume.";
  return null;
}
