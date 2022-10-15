export interface GithubRepo {
    id: string,
    owner: Owner,
    name: string,
    full_name: string,
    created_at: string,
    description: string,
    html_url: string,
    homepage: string,
    stargazers_count: string,
}

interface Owner {
    avatar_url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    organizations_url: string
    received_events_url: string

}