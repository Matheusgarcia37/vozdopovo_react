// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  nome: string;
  descricao: string;
  codigo: string;
  preco: number;
  imagem: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const data: Data[] = [
    {
      nome: 'Produto 1',
      descricao: 'Descrição do produto 1',
      codigo: '1',
      preco: 100,
      imagem: 'https://via.placeholder.com/300x300',
    },
    {
      nome: 'Produto 2',
      descricao: 'Descrição do produto 2',
      codigo: '2',
      preco: 200,
      imagem: 'https://via.placeholder.com/300x300',
    },
    {
      nome: 'Produto 3',
      descricao: 'Descrição do produto 3',
      codigo: '3',
      preco: 300,
      imagem: 'https://via.placeholder.com/300x300',
    },
    {
      nome: 'Produto 4',
      descricao: 'Descrição do produto 4',
      codigo: '4',
      preco: 400,
      imagem: 'https://via.placeholder.com/300x300',
    },
    {
      nome: 'Produto 5',
      descricao: 'Descrição do produto 5',
      codigo: '5',
      preco: 500,
      imagem: 'https://via.placeholder.com/300x300',
    },
    {
      nome: 'Produto 6',
      descricao: 'Descrição do produto 6',
      codigo: '6',
      preco: 600,
      imagem: 'https://via.placeholder.com/300x300',
    }, 
    {
      nome: 'Produto 7',
      descricao: 'Descrição do produto 7',
      codigo: '7',
      preco: 700,
      imagem: 'https://via.placeholder.com/300x300',
    }
  ];
  res.status(200).json(data);
}
