import React from 'react';
import { Container,Banner,Avatar,ProfileData,LocationIcon,CakeIcon,Followage,EditButton } from './styles';
import Feed from '../Feed';
const ProfilePage: React.FC = () => {
  return <Container>
    <Banner>
      <Avatar/>
    </Banner>
    <ProfileData>
      <EditButton outlined>Editar Perfil</EditButton>
      <h1>Renaldo José</h1>
      <h2>@renaldodev</h2>
      <p>
        Developer at <a href="#o">@Tuamateka</a>
      </p>
      <ul>
        <li>
          <LocationIcon/>
          Luanda, Angola
        </li>
        <li>
          <CakeIcon/>
          Nascido(a) em 5 de Maio de 1998
        </li>
      </ul>
      <Followage>
        <span>
          seguindo <strong>94</strong>
        </span>
        <span>
          <strong>730 </strong> seguidores
        </span>
      </Followage>
    </ProfileData>
    <Feed/>
  </Container>
}

export default ProfilePage;