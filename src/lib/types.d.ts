interface BlogPost {
    title: string;
    brief: string;
    url: string;
}

interface PostEdge {
    node: BlogPost;
}

interface Posts {
    edges: PostEdge[];
}

interface Publication {
    isTeam: boolean;
    title: string;
    posts: Posts;
}

interface ApiResponse {
    publication: Publication;
}

