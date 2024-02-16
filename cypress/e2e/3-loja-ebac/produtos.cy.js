/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";


describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve solucionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Beaumont Summit Kit')

        cy.get('#tab-description > :nth-child(1)').should('contain', 'Descrição')
        
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin-Yoga-Pant')
        cy.get('.product_title').should('contain','Zeppelin Yoga Pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Pierce Gym Short')
        produtosPage.addProdutoCarrinho('32', 'Red', qtd)

        cy.get('.woocommerce-message').should('contain', qtd + ' × “Pierce Gym Short” foram adicionados no seu carrinho.')        
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho, 
                dados[0].cor, 
                dados[0].quantidade)    
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto) 
        })
        
              
    });
});