import {AttributeCollection, Attributes} from './collection';

interface BaseEntity {
    id?: string|number;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
}

interface Article extends BaseEntity {
    title: string;
    content: string;
    slug: string;
    seo: SeoData;
    banner: SingleMediaAttribute;
    thumbnail: SingleMediaAttribute;
    stacks: AttributeCollection<Stack>
    recommended_articles: AttributeCollection<Article>;
}

interface Stack {
    title: string;
    slug: string;
    image: SingleMediaAttribute;
}

interface SingleMedia {
    url: string;
    height: number;
    width: number;
    alternativeText: string;
    formats?: any;
}

type SeoData = {
    title: string;
    description: string;
    keywords: string;
    thumbnail: SingleMediaAttribute;
}

type SingleMediaAttribute = {
    data: {
        attributes: SingleMedia;
    }
}

type MediaCollection = AttributeCollection<SingleMedia>;

type HeroSection = {
    title: string;
    content: string;
    buttonText: string;
    image: SingleMediaAttribute;
}

interface WorkExperience {
    id: number,
    work: string,
    employer: string,
    workgap: string,
    timeline: string,
    casestudy?: string,
    desciption: string,
    skills: Array<string>,
    isLast?: boolean
}

interface Project extends BaseEntity {
    name: string;
    title: string;
    slug: string;
    seo: SeoData;
    stacks: AttributeCollection<Stack>;
    thumbnail: SingleMediaAttribute;
    gallery: MediaCollection;
    context: string;
    objectives: string;
    requirements: string;
    content_first: string;
    content_second: string;
    recommended_articles: AttributeCollection<Article>;
    recommended_projects: AttributeCollection<Project>;
    includes?: string;
    link?: string;
}

type Testimonial = {
    title: string;
    name: string;
    position: string;
    company: string;
    testimonial: string;
    avatar: SingleMediaAttribute;
}

type HomePageData = {
    data: {
        homePage: {
            data: {
                attributes: {
                    hero: HeroSection;
                    projects: AttributeCollection<Project>;
                    testimonials: AttributeCollection<Testimonial>;
                    blogs: AttributeCollection<Article>;
                    seo: SeoData;
                }
            }
        }
    }
}

export type {WorkExperience, Article, Project, Testimonial, HomePageData, SingleMedia, MediaCollection, SeoData, SingleMediaAttribute, HeroSection, Stack};