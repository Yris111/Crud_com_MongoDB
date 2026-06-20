import Produto from "../models/Produto.js";


export async function criarProduto(req, res) {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
}

export async function listarProdutos(req, res) {
    const produtos = await Produto.find();
    res.json(produtos);
}

export async function buscarProduto(req, res) {
    const produto = await Produto.findById(req.params.id);
    res.json(produto);
}

export async function precoCrescente(req, res) {
    const produtos = await Produto.find().sort({ preco: 1 });
    res.json(produtos);
}

export async function precoDecrescente(req, res) {
    const produtos = await Produto.find().sort({ preco: -1 });
    res.json(produtos);
}

export async function atualizarProduto(req, res) {
    const produto = await Produto.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res,json(produto);
}

export async function deletarProduto(req, res) {
    await Produto.findByIdAndDelete(req.params.id);
    res.status(204).send();
}