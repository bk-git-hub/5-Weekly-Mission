export interface FolderObj {
  id: number;
  name: string;
  user_id: number;
}

export interface LinkObj {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  updated_at: string;
  url: string;
}

export interface ModalContentProps {
  folders?: FolderObj[];
  headerText?: string;
  subHeaderText?: string;
  folderNum?: number;
  buttonText?: string;
  initialValue?: string;
}
