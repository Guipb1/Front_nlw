import React, {useEffect,useState} from 'react'; // tres conseitos do react = componente,propriedades e estado =  qualquer tipo de info que quero armazenar no componente
import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'; /*tilelayer = servidor para pegar as imagens do mapa,ruas,etc */
//import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';
import happMapIcon from '../components/Map/happMapIcon';
import api from '../services/api';

/*const mapIcon = Leaflet.icon({
    iconUrl:mapMarkerImg,

    iconSize:[58, 68],
    iconAnchor:[29,68],
    popupAnchor: [170, 2]
})*/

interface Orphanage {
    id:number;
    latitude:number;
    longitude:number;
    name:string;

}

function OrphanagesMap() { 
    const [orphanages,setOrphanages] = useState<Orphanage[]>([]);// toda variavel que precisa ser alterada pelo proprio component vou salvar no estado

    
    useEffect(() => { // execute essa funcao x quando alguma das variais dentro de []  for alterada / primeiro paramentro = qual acao quero executar e o segundo quandp quero executar
        api.get('orphanages').then(Response => {
            setOrphanages(Response.data);
        });
    },[]); 
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p> Muitas ciranças estao esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong> Curitiba</strong>
                    <span> Parana</span>
                </footer>
            </aside>

            <Map 
                center={[-25.4212124,-49.130795]} /*propriedade obrigatoria, latitude e longitude*/
                zoom={12}
                style={{width: '100%' , height:'100%'}}    /*o primeiro {} indica que quero incluir um codigo js dentro da propriedade e o outro {} indica um objeto js*/
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                
             {orphanages.map((orphanage,i) => {
                 return (
                    <Marker
                    icon={happMapIcon}
                    position = {[orphanage.latitude, orphanage.latitude]}
                    key={i}
                >
                    <Popup closeButton= {false} minWidth={240} maxWidh={240} className= "map-popup">
                        {orphanage.name}
                        <Link to={`/orphanages/${orphanage.id}`}>
                            <FiArrowRight size={20} color ="#FFF"/>
                        </Link>

                    </Popup>
                    
                </Marker>
                 )
             })}
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;