import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import {supabase} from './supabaseClient'

const Tournament = () => {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({id: "", nom_torneig: "", esport: "", tipus_torneig: ""})
  const {id} = useParams()

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts(){
    const { data } = await supabase
      .from('torneig')
      .select('*')

      //Filters
      .eq('id', id)

      setPosts(data)
  }

  return(
    <div>
      
      {
        posts.map(post => (
          <h1 key={post.id}>
            {post.nom_torneig}
          </h1>
        ))
      }

    </div>
  )
}

export default Tournament