import { useRouter} from 'next/router'

export default function Carid() {
    const router = useRouter();
    return(
        <>
        <h1> my name is: {router.query.name} </h1>
        <h1> my age is : {router.query.age} </h1>
        </>
    );
}