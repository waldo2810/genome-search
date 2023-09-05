export interface User {
  ardaId: number;
  ggId: string;
  name: string;
  comparableName: string;
  username: string;
  professionalHeadline: string;
  imageUrl: string;
  completion: number;
  grammar: number;
  weight: number;
  verified: boolean;
  connections: any;
  totalStrength: number;
  pageRank: number;
  organizationId: string;
  organizationNumericId: string;
  publicId: string;
  status: string;
  creators: any;
  relationDegree: number;
  contact: boolean;
  isBookmark: boolean;
}
