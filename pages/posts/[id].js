


export default function Home(props){
    return(
      <div>
         posts page id
         <h1>{props.post.title}</h1>
      </div>
    )
  }
  export async function getStaticPaths(){
    const res = await fetch("http://localhost:3000/api/posts");
    const data = await res.json();  


    const paths = data.map(d => {
      return{
        params: {id:`${d.id}`}
      }
    })
    return{
      paths: paths,
      fallback:false
    }
  }

  export async function getStaticProps(context){
    const res = await fetch(`http://localhost:3000/api/posts/${context.params.id}`)
    const data = await res.json()


    return{
      props: {
        post:data
      }
    }
  }