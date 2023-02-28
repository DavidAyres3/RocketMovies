import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Return } from "../../components/Return"
import { Textarea } from "../../components/textarea"
import { Input } from "../../components/Input"
import { Noteitem } from "../../components/Noteitem"
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom'
export function New() {
  return (
    <Container>
      <Header />
      <Content>
        <Link to="/">
        <Return />
        </Link>
        <h1>Novo filme</h1>
        <div class="inputText">
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>
        <Textarea placeholder="Observações" />
        <span>Marcadores</span>
        <div className="tags">
          <Noteitem value="David é lindo!!" />
          <Noteitem isNew placeholder="Novo marcador" />
        </div>
        <div class="buttons">
          <Button title="Excluir filme" id="remove" />
          <Button title="Salvar alterações" class="save" />
        </div>
      </Content>
    </Container>
  )
}