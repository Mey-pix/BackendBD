<<<<<<< HEAD
import Categoria from "../Modelo/categoria";
import conectar from "./Conexao";
export default class CategoriaDAO
{
=======
import Categoria from "../Modelo/categoria.js";
import conectar from "./Conexao.js";

export default class CategoriaDAO{

>>>>>>> ebde79993be08f1e9a45ad2e1ea2d500a721efff
    constructor(){
        this.init();
    }

<<<<<<< HEAD
    async init()
    {
=======
    async init(){
>>>>>>> ebde79993be08f1e9a45ad2e1ea2d500a721efff
        try{
            const conexao = await conectar();
            const sql = `
                CREATE TABLE IF NOT EXISTS categoria(
<<<<<<< HEAD
                codigo INT NOT NULL,
                descricao VARCHAR(50) NOT NULL,
                CONSTRAINT pk_categoria PRIMARY KEY(codigo))
            `;
            await conexao.execute(sql);
            await conexao.release();
        }
        catch(erro)
        {
            console.log("Não foi possível iniciar o banco de dados: " + erro.message);
=======
                    codigo INT NOT NULL AUTO_INCREMENT,
                    descricao VARCHAR(50) NOT NULL,
                    CONSTRAINT pk_categoria PRIMARY KEY(codigo)
                );
            `;
            await conexao.execute(sql);
            await conexao.release();

        }
        catch(erro){
            console.log("Erro ao iniciar a tabela categoria!");
>>>>>>> ebde79993be08f1e9a45ad2e1ea2d500a721efff
        }
    }

    async gravar(categoria){
<<<<<<< HEAD
        if(categoria instanceof Categoria)
        {
            const conexao=await conectar();
            const sql ="INSERT INTO categoria(descricao) VALUES ?";
            const parametros = [categoria.descricao];
            const resultado = conexao.execute(sql, parametros);
            categoria.codigo=resultado[0].insertId;
            await conexao.release();
        }
    }

    async editar(categoria){
        if(categoria instanceof Categoria)
        {
            const sql ="UPDATE categoria SET descricao = ?";
            const parametros = [categoria.descricao];
            const resultado = conexao.execute(sql, parametros);
            categoria.codigo=resultado[0].insertId;
=======
        if (categoria instanceof Categoria){
            const conexao = await conectar();
            const sql = "INSERT INTO categoria(descricao) VALUES ?";
            const parametros = [categoria.descricao];
            const resultado = await conexao.execute(sql,parametros);
            categoria.codigo = resultado[0].insertId;
            await conexao.release();
        }
    }
    
    async editar(categoria){
        if (categoria instanceof Categoria){
            const conexao = await conectar();
            const sql = "UPDATE categoria SET descricao = ?";
            const parametros = [categoria.descricao];
            await conexao.execute(sql,parametros);
>>>>>>> ebde79993be08f1e9a45ad2e1ea2d500a721efff
            await conexao.release();
        }
    }

<<<<<<< HEAD
    async deletar(categoria){
        if(categoria instanceof Categoria)
            {
                const conexao = await conectar();
                const sql ="DELETE FROM categoria WHERE codigo = ?";
                const parametros = [categoria.descricao];
                const resultado = conexao.execute(sql, parametros);
                categoria.codigo=resultado[0].insertId;
                await conexao.release();
            }
    }

    async consultar(categoria){
        const conexao = await conectar();
        const sql ="SELECT * FROM categoria ORDER BY descricao";
        const [registros, campos] = await conexao.query(sql);
        let listaCategorias=[];
        for (const registro of registros)
        {
            const categoria = new Categoria(registro['codigo'],
                                            registro['descricao']
            );
        }
        listaCategorias.push(categoria);
    }
=======
    async excluir(categoria){
        if (categoria instanceof Categoria){
            const conexao = await conectar();
            const sql = "DELETE FROM categoria WHERE codigo = ?";
            const parametros = [categoria.codigo];
            await conexao.execute(sql,parametros);
            await conexao.release();
        }
    }

    async consultar(){

        const conexao = await conectar();
        const sql = "SELECT * FROM categoria ORDER BY descricao";
        const [registros, campos] = await conexao.query(sql);
        let listaCategoria=[];
        for (const registro of registros){
            const categoria = new Categoria(registro['codigo'],
                                            registro['descricao']    
            );
            listaCategoria.push(categoria);
        }

        return listaCategoria;

    }

>>>>>>> ebde79993be08f1e9a45ad2e1ea2d500a721efff
}