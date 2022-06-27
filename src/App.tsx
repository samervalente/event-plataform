import {gql, useQuery} from "@apollo/client"
import {useEffect} from "react"
import { Header } from "./components/Header";


const GET_LESSONS_QUERY = gql`
  query{
   
    lessons{
      id
      title

      teacher{
        name
      }
    }

  }

`
interface Lesson{
  id:string;
  title:string;
  
}


function App() {

  //Forma 1 (com useEffect)
  // useEffect(() => {
  //   client.query({
  //     query:GET_LESSONS_QUERY
  //   }).then(response => {
          // console.log(response.data)
  //   })
  // }, [])

  //Forma 2 (com useQuery)
  const {data} = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)


  return (
    
   <>
     <Header />

<ul>
  {data?.lessons.map(lesson => {
    return <li  key={lesson.id}>{lesson.title}</li>
  })}

 
</ul>
   </>
   
  )
}

export default App
