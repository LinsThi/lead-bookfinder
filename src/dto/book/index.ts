export interface ImageProps {
  smallThumbnail: string;
  thumbnail: string;
}

export interface VolumeInfoProps {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  imageLinks: ImageProps;
  previewLink: string;
  infoLink: string;
}

export interface SaleInfoProps {
  country: string;
  saleability: string;
  isEbook: boolean;
}

export interface AccessInfoProps {
  country: string;
  viewability: string;
}

export interface SearchInfoProps {
  textSnippet: string;
}

export interface BookProps {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfoProps;
  saleInfo: SaleInfoProps;
  accessInfo: AccessInfoProps;
  searchInfo: SearchInfoProps;
}
