import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Post = ({ post }: any) => {
    const router = useRouter()
    const { pid } = router.query

    const [data, setData] = useState('Loading');

    setTimeout(() => {
        setData(`My name is ${pid}`)
    }, 1000);

    return <>
        <p>PID: {pid}</p>
        <p>Name: {post?.name}</p>
        <p>Data client: {data}</p>
    </>
}

export default Post


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        // params is parsed from URL
        paths: [{ params: { pid: '1' } }, { params: { pid: '2' } }, { params: { pid: '3' } }],
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const pid = context.params?.pid

    return {
        props: {
            post: { name: `I am ${pid}` }
        },
    };
}