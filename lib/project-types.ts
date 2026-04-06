export type ProjectDetail = {
  title: string;
  category: string;
  client: string;
  location: string;
  projectSize: string;
  completionDate: string;
  status: string;
  shortDescription: string;
  fullDescription: string[];
  keyResults: string[];
  gallery: string[];
  image: string;
};

export type ProjectListItem = {
  id: string | number;
  title: string;
  slug: string;
  category: string;
  client: string;
  location: string;
  projectSize: string;
  completionDate: string;
  status: string;
  isFeatured: boolean;
  image: string;
  shortDescription: string;
};
