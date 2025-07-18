import type { ReactNode } from 'react'

export interface Project {
  id: string
  title: string
  description: string
  category: string
  techs: string[]
  image: string
  link: string
  repository: string
}

export type LinkContainerProps = {
  children: ReactNode
}

export type Dados ={
  nome: string
  linkedin: string
  email:string
  telefone:string
  github: string
  whatsapp:string
  behance:string
  curriculo:string
  local: string
  profissao: string
  especializacao:string
  expertise?:string[]
  resumoProfissional?:string
  resume?:{    
    cargo:string
    data:string
    empresa: string
    funcoes:string[]
  }[]
  formacao?:{
    nome: string
    ano:string
    instituicao: string
  }[]
}

export type DadosNew ={
  nome: string
  contacts:{
    name:string, url:string, icon:string, label: string, value?:string
  }[]
  local: string
  resumeNew: {
    file:string
    profissao: string
    especializacao:string
    expertise?:string[]
    resumoProfissional?:string
    experience:{    
      cargo:string
      data:string
      empresa: string
      funcoes:string[]
    }[]
    formacao?:{
      nome: string
      ano:string
      instituicao: string
    }[]
    skills:{
        name: string
        items:  {
            name: string
            details: string
            percent: number
          }[]
      }[]
  }
}

export type Skills = {
  name: string
  items:  {
      name: string
      details: string
      percent: number
    }[]
}[]