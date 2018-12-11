export class Obj {
  id: string;
  name: string;
  categoryType: string;
  groups: Furniture[];
  totalPages: number;
  categories: any[];
}


export class Furniture {
    id: string;
    name: string;
    links: Links;
    priceRange: PriceRange;
    thumbnail: Thumbnail;
    hero: Thumbnail;
    images: Thumbnail[];
    swatches: any[];
    messages: string[];
    flags: Flag[];
    reviews: Reviews;
  }
  
  interface Reviews {
    recommendationCount: number;
    likelihood: number;
    reviewCount: number;
    averageRating: number;
    id: string;
    type: string;
  }
  
  interface Flag {
    bopisSuppress: boolean;
    rank: number;
    id: string;
  }
  
  interface Thumbnail {
    size: string;
    meta: string;
    alt: string;
    rel: string;
    width: number;
    href: string;
    height: number;
  }
  
  interface PriceRange {
    selling: Selling;
  }
  
  interface Selling {
    high: number;
    low: number;
  }
  
  interface Links {
    www: string;
  }