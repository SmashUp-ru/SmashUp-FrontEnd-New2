import { Mashup, useMashupStore } from '@/store/entities/mashup.ts';
import { Playlist, usePlaylistStore } from '@/store/entities/playlist.ts';
import { useEffect, useState } from 'react';
import { useGlobalStore } from '@/store/global.ts';
import { useRecommendations } from '@/router/features/recommendations/useRecommendations.ts';

export function useRootPageData() {
    const { startLoading, updateIsLoading } = useGlobalStore();
    const { recommendations: recommendationsIds } = useRecommendations();
    const getManyMashupsByIds = useMashupStore((state) => state.getManyByIds);
    const getManyPlaylistsByIds = usePlaylistStore((state) => state.getManyByIds);

    const [playlistsLoading, setPlaylistsLoading] = useState(false);
    const [recommendationsLoading, setRecommendationsLoading] = useState(false);

    useEffect(() => {
        setPlaylistsLoading(true);
        setRecommendationsLoading(true);
        startLoading();
    }, []);

    useEffect(() => {
        updateIsLoading(playlistsLoading || recommendationsLoading);
    }, [playlistsLoading, recommendationsLoading]);

    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    useEffect(() => {
        getManyPlaylistsByIds([1, 2, 3, 27, 1043])
            .then((r) => setPlaylists(r))
            .then(() => setPlaylistsLoading(false));
    }, []);

    const [recommendations, setRecommendations] = useState<Mashup[]>([]);
    useEffect(() => {
        if (recommendationsIds) {
            getManyMashupsByIds(recommendationsIds)
                .then((r) => setRecommendations(r))
                .then(() => setRecommendationsLoading(false));
        }
    }, [recommendationsIds]);

    return {
        playlists,
        recommendationsIds,
        recommendations,
        isLoading: recommendationsLoading || playlistsLoading
    };
}
