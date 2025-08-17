import { FieldType } from "@/types";
import { Compass, LayoutDashboard, Settings, Vault,ToyBrick } from "lucide-react";



export const navigations = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Vault",
    link: "/dashboard/vault",
    icon: Vault,
  },
  {
    label: "Explore",
    link: "/dashboard/explore",
    icon: Compass,
  },
    {
    label: "PlayGround",
    link: "/dashboard/playground",
    icon: ToyBrick,
  },
  {
    label: "Settings",
    link: "/dashboard/settings",
    icon: Settings,
  },
];

export const templates = [
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title depends on yout blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "You are an expert content strategist. Based on the provided niche and outline, generate 5 unique, engaging, and SEO-optimized blog topic ideas. Each idea should be presented in bullet-point format, crafted to spark curiosity and drive clicks. Return the output in **Markdown** format only, no HTML or RTF.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: FieldType.INPUT,
        name: "niche",
      },
      {
        label: "Enter blog outline",
        field: FieldType.TEXTAREA,
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "You are a professional blog writer. Generate detailed, engaging, and well-structured blog content based on the given topic and outline. Ensure the tone matches the subject, the flow is logical, and the content is informative and SEO-friendly. Return the result in **Markdown format only**. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label: "Enter your blog topic",
        field: FieldType.INPUT,
        name: "topic",
      },
      {
        label: "Enter blog Outline here",
        field: FieldType.TEXTAREA,
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "You are an expert blog strategist. Generate the top 5 unique and specific blog topic ideas in bullet point format only, without any descriptions, based on the provided niche. Ensure each idea is engaging, relevant, and SEO-friendly. Return the result in Markdown format only. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label: "Enter your Niche",
        field: FieldType.INPUT,
        name: "niche",
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "You are an expert SEO content strategist. Give me the best 5 SEO-optimized and high-ranking blog title ideas in bullet-wise format only, based on the provided keywords and outline. Ensure each title is compelling, relevant, and designed to maximize click-through rates. Return the result in Markdown format only. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label: "Enter your youtube video topic keyowords",
        field: FieldType.INPUT,
        name: "keywords",
      },
      {
        label: "Enter youtube description Outline here",
        field: FieldType.TEXTAREA,
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "You are a YouTube content expert. Generate a YouTube description with relevant emojis, limited to 4-5 lines, based on the given topic and outline. Make it engaging, informative, and optimized for viewer interest. Return the result in Markdown format only. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label: "Enter your blog topic/title",
        field: FieldType.INPUT,
        name: "topic",
      },
      {
        label: "Enter youtube Outline here",
        field: FieldType.TEXTAREA,
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",

    aiPrompt:
      "You are an SEO and YouTube marketing expert. Generate 10 highly relevant and SEO-optimized YouTube tags in bullet point format based on the given title and outline. Ensure each tag is concise, keyword-rich, and aligned with the content. Return the result in Markdown format only. Do not use HTML or Rich Text Format (RTF).",

    form: [
      {
        label: "Enter your youtube title",
        field: FieldType.INPUT,
        name: "title",
      },
      {
        label: "Enter youtube video Outline here (Optional)",
        field: FieldType.TEXTAREA,
        name: "outline",
      },
    ],
  },

  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "You are a professional content editor. Rewrite the given article completely in your own words to ensure it is 100% plagiarism-free, while preserving the original meaning and tone. Maintain clarity, coherence, and readability. Return the result in Markdown format only. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: FieldType.TEXTAREA,
        name: "article",
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "You are a professional English editor. Given textToImprove, rewrite the text without any grammar mistakes, enhance its professionalism, and ensure clarity and fluency. Return the result in Markdown format only. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: FieldType.TEXTAREA,
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "You are a creative content enhancer. Add contextually relevant emojis to the given outline text and rewrite it in an engaging and visually appealing way. Ensure the emojis enhance meaning without overuse or distraction. Return the result in Markdown format only. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label: "Enter your text to add emojis",
        field: FieldType.TEXTAREA,
        name: "outline",
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",

    slug: "instagram-post-generator",
    aiPrompt:
      "You are a social media content specialist. Generate 3 unique and engaging Instagram post captions based on the given keywords. Each post should be creative, relevant, and suitable for audience engagement. Return the output in Markdown format only. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label: "Enter Keywords for your post",
        field: FieldType.INPUT,
        name: "keywords",
      },
    ],
  },
  {
    name: "Instagram Hash Tag Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",

    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "You are an Instagram growth strategist. Generate 15 highly relevant and trending Instagram hashtags based on the given keywords. Ensure the hashtags are optimized for reach and engagement. Return the output in Markdown format only. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label: "Enter Keywords for your instagram hastag",
        field: FieldType.INPUT,
        name: "keywords",
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "An AI tool that generate New and trending instagram idea depends on your niche",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",

    slug: "instagram-post-idea-generator",
    aiPrompt:
      "You are a social media content strategist. Generate 5-10 creative Instagram post or reel ideas based on the given niche, aligned with the latest trends. Ensure each idea is engaging, relevant, and suitable for boosting audience interaction. Return the output in Markdown format only. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label: "Enter Keywords / Niche for your instagram idea",
        field: FieldType.INPUT,
        name: "keywords",
      },
    ],
  },
  {
    name: "English Grammer Check",
    desc: "AI Model to Correct your english grammer by providing the text",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",

    slug: "english-grammer-checker",
    aiPrompt:
      "You are a professional English proofreader. Rewrite the input text with correct grammar, punctuation, and sentence structure while preserving the original meaning and tone. Ensure the result is clear, professional, and polished. Return the output in Markdown format only. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label: "Enter text to correct the grammer",
        field: FieldType.INPUT,
        name: "inputText",
      },
    ],
  },
  {
    name: "Write Code",
    desc: "AI Model to generate programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",

    slug: "write-code",
    aiPrompt:
      "You are a senior software developer. Write code based on the user-provided code description. Ensure the code is clean, efficient, and follows best practices. Return the output in Markdown format only within a code block. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: FieldType.TEXTAREA,
        name: "codeDesscripton",
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "AI Model to explain programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",
    slug: "explain-code",
    aiPrompt:
      "You are a programming instructor. Explain the provided code line by line based on the user's code description. Ensure the explanation is clear, accurate, and easy to understand. Return the output in Markdown format only. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label: "Enter code which you want to understand",
        field: FieldType.TEXTAREA,
        name: "codeDesscripton",
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",

    slug: "code-bug-detector",
    aiPrompt:
      "You are a skilled debugging assistant. Analyze the provided code snippet or error message, identify the root cause of the issue, and suggest a detailed and beginner-friendly fix. Provide alternative solutions if applicable. Return the output in Markdown format only within a code block. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: FieldType.TEXTAREA,
        name: "codeInput",
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketting",

    slug: "tagline-generator",
    aiPrompt:
      "You are a professional brand strategist. Based on the provided product name and outline, generate 5–10 catchy, creative, and market-ready taglines for the business product. Ensure they are concise, compelling, and aligned with the brand’s tone. Return the output in Markdown format only. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label: "Product/Brand Name",
        field: FieldType.INPUT,
        name: "productName",
      },
      {
        label: "What you are selling / Marketting",
        field: FieldType.TEXTAREA,
        name: "outline",
      },
    ],
  },
  {
    name: "Product Description",
    desc: "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketting",

    slug: "product-description",
    aiPrompt:
      "You are an expert e-commerce copywriter. Based on the provided product name and description, generate a concise and persuasive product description tailored for online shoppers. Make it engaging, informative, and conversion-focused. Return the output in Markdown format only. Do not use HTML or Rich Text Format (RTF).",
    form: [
      {
        label: "Product Name",
        field: FieldType.INPUT,
        name: "productName",
      },
      {
        label: "Product Details",
        field: FieldType.TEXTAREA,
        name: "outline",
      },
    ],
  },
];

export const features  =[
              {
                title: 'Multiple Templates',
                description:
                  'From blog titles to YouTube tags — choose a template and get tailored results instantly.',
              },
              {
                title: 'AI-Powered Creativity',
                description:
                  'Break through writer’s block with AI suggestions designed to spark ideas and boost productivity.',
              },
              {
                title: 'Fast & Easy to Use',
                description:
                  'Generate content in seconds with a simple interface built for creators, developers, and marketers.',
              },
            ]
