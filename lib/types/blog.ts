export type Tag = 'Angular' | 'Ionic' | 'React' | 'Next' | 'Nest' | 'Node';

export const tagFilters: Tag[] = [
  'Angular',
  'Ionic',
  'React',
  'Next',
  'Nest',
  'Node',
];

export interface MetaData {
  title: string;
  dateString: string;
  mainImageUrl: string;
  excerpt: string;
  tags: Tag[];
}

export interface Post {
  slug: string;
  metaData: MetaData;
}

export interface MetaProps extends Pick<Post, 'slug' | 'metaData'> {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}
