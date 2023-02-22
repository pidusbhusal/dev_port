import Head from "next/head";
import {SeoData} from "../types";

const SEO = ({title, description, keywords, thumbnail}: SeoData) => {
    const {url} = thumbnail.data.attributes;
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={url} />
        </Head>
    )
}

export {SEO};