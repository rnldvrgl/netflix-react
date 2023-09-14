import videoData from "../data/videos.json";

export const getCommonVideos = async (url) => {
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    try {
        const BASE_URL = "youtube.googleapis.com/youtube/v3";
        const response = await fetch(
            `https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`
        );

        const data = await response.json();

        if (data?.error) {
            console.error("Youtube API error", data.error);
            return [];
        }

        return data?.items.map((item) => {
            const id = item.id?.videoId || item.id;
            return {
                title: item.snippet.title,
                description: item.snippet.description,
                imgUrl: item.snippet.thumbnails.high.url,
                id,
            };
        });
    } catch (error) {
        console.error("Something went wrong with video library", error);
        return [];
    }
};

export const getVideos = (searchQuery) => {
    const URL = `search?part=snippet&q=${searchQuery}&type=video`;
    return getCommonVideos(URL);
};

export const getPopularVideos = () => {
    const URL =
        "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=PH";
    return getCommonVideos(URL);
};

export const getBillboardVideo = async () => {
    const URL = "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=PH";

    return getCommonVideos(URL);
};
