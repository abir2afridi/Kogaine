export interface GeneratedPosterData {
  headline: string;
  subhead: string;
  establishedDate: string;
  tagline: string;
  description: string;
  layoutStyle: 'automotive' | 'minimal' | 'typography' | 'retro' | 'art-deco';
}

export interface PosterRequest {
  brandName: string;
  brandType: string;
}