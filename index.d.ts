interface Param {
  params: {
    id: string;
  };
}

interface PostMeta {
  id: string;
  date: string;
  title: string;
  isPublish: boolean;
}

interface Post extends PostMeta {
  contentHtml: string;
}
