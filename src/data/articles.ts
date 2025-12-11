export type Article = {
    title: string;
    url: string;
    date: string;
};

export const articles: Article[] = [
    {
        title: "IPアドレスについて",
        url: "https://qiita.com/yusei0516/items/03229f06bc2d6fa3a1b7",
        date: "2025/06/06",
    },
    {
        title: "CI/CDって何？って思った人におすすめ！",
        url: "https://qiita.com/yusei0516/items/8ce17e669da55fdec5a0",
        date: "2025/08/13",
    },
    {
        title: "AWS料金が跳ね上がる典型例と回避方法",
        url: "https://qiita.com/yusei0516/items/3dce83dda7b84f1c3f13",
        date: "2025/12/06",
    },
];