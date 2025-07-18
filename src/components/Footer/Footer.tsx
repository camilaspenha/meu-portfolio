import SocialContainer from '../Social/SocialContainer'
import { dadosNew } from '../../constants/dados'

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer position-relative">
        <div className="container d-md-flex justify-content-between py-4">
          <div className="copyright text-center d-flex flex-column justify-content-center">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">{dadosNew.nome}</strong> <span>Todos os direitos reservados</span></p>
          </div>
          <div className="credits mt-3 mt-md-0">
            <SocialContainer />     
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
