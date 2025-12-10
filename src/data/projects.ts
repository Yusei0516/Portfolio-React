export type Project = {
	title: string;
	role: string;
	description: string;
	techStack: string[];
	githubUrl: string;
	kind: "team" | "individual";
};

export const projects: Project[] = [
	{
		title: "はぎゅっとチャット",
		role: "バックエンド, チーム開発",
		description:
			"オープン/グループ/個別チャットを備えたWebチャットアプリ。ログイン、個別メッセージ、グループ作成/招待/削除/メッセージ担当。",
		techStack: ["Flask", "MySQL", "Docker"],
		githubUrl: "https://github.com/Yusei0516/ChatApp",
		kind: "team",
	},
	{
		title: "HackNow",
		role: "インフラ, チーム開発",
		description:
			"AWS上にWeb3層構成を構築。ローカル環境はDocker Composeで再現し、構成図や手順をREADMEに整理。",
		techStack: ["AWS", "Docker"],
		githubUrl: "https://github.com/Yusei0516/hacknow",
		kind: "team",
	},
	{
		title: "かじまる",
		role: "バックエンド, チーム開発",
		description:
		"家族向けの家事タスク管理アプリ。新規登録やログインのユーザー周り, 買い物リスト, 在庫ハブ, 天気APIを取得した天気レコメンド機能を担当。",
		techStack: ["Django", "MySQL"],
		githubUrl: "https://github.com/Yusei0516/kajimaru-app",
		kind: "team",
	},
	{
		title: "ポートフォリオサイト",
		role: "個人開発",
		description:
			"ReactとTypeScriptで作成したポートフォリオサイト。",
		techStack: ["React", "TypeScript", "Vite"],
		githubUrl: "https://github.com/Yusei0516/portfolio-react",
		kind: "individual",
	},
];
