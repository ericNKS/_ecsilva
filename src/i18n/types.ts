export type Locale = "pt" | "en";

export interface Pillar {
  title: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  techs: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  isComingSoon?: boolean;
}

export interface Dictionary {
  locale: Locale;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    titleLine1: string;
    titleHighlight: string;
    bioIntro: string;
    name: string;
    roleIntro: string;
    proofHighlight: string;
    btnProjects: string;
    btnDownloadCv: string;
    cvFileName: string;
    cvUrl: string;
  };
  values: {
    badge: string;
    title: string;
    description: string;
    pillars: Pillar[];
  };
  projects: {
    badge: string;
    title: string;
    description: string;
    items: ProjectItem[];
  };
  contact: {
    title: string;
    description: string;
    highlight1: string;
    highlight2: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submittingButton: string;
  };
  footer: {
    roleDescription: string;
    navTitle: string;
    connectTitle: string;
    downloadCv: string;
    copyright: string;
  };
  whatsapp: {
    phoneNumber: string;
    displayPhone: string;
  };
}
