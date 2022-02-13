interface Window {
  // pageview
  gtag(
    type: 'config',
    googleAnalyticsId: string,
    {
      page_path: string,
    },
  );

  // event
  gtag(
    type: 'event',
    eventAction: string,
    fieldObject: {
      event_label: string,
      event_category: string,
      value?: string,
    },
  );
}

interface GaEvent {
  action: string;
  category: string;
  label: string;
  value?: string;
}

interface Param {
  params: {
    id: string,
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
