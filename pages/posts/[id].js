import { useRouter } from 'next/router';

export default function Post(parms) {
    const router = useRouter();
    /**
     * Destructures the `id` property from the `router.query` object.
     * @type {Object}
     * @property {string} id - The ID of the post.
     */
    const { id } = router.query;

    return (
        <>
            <h1> test </h1>
            <h2>{id}</h2>
        </>
    )
}