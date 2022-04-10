export type Tags = []


export interface MetaData {
  title: string;
  dateString: string;
  mainImageUrl: string;
  excerpt: string;
  tags: Tags[];
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
