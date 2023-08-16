export interface AppConfigData {
  instagram_url: string;
  facebook_url: string;
  twitter_url: string;
  telegram_url: string;
  company_name: string;
  company_number: number;
  company_support_email: string;
  company_sales_email: string;
  slogan: string;
  description: string;
  metaUrl: string;
  company_url: string;
  short_name: string;
  register_url: string;
  login_url: string;
  privacy_link: string;
  terms_link: string;
  blog_link: string;
  legal_link: string;
}










type PageKeys = "learn" | "banking" | "efcc"; // Add more keys as needed

type PageStructure = {
  title: string;
  description: string;
  form:{
    personal: {
      label: string;
      type: string;
    }[];
  }
};

export type PageDataType = {
  [K in PageKeys]?: PageStructure;
};
