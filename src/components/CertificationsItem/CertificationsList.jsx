import PropTypes from 'prop-types';

import { certifications } from 'data/aboutMe';
import formatDate from 'utils/formatDate';
import { Item, List } from './certificationsList.styled';
import SubTitle from 'components/SubTitle';

const CertificationsList = () => {
  return (
    <List>
      {certifications.map(
        ({
          logo,
          name,
          organization,
          issueDate,
          credentialId,
          credentialURL,
        }) => (
          <Item key={credentialId}>
            <a href={credentialURL} target="_blank" rel="noreferrer">
              <img width={100} src={logo} alt={name} />
            </a>
            <div>
              <SubTitle title={name} />
              <p>Issuing organization: {organization}</p>
              <p>Issue date: {formatDate(issueDate)}</p>
              <p>Credential ID: {credentialId}</p>
            </div>
          </Item>
        )
      )}
    </List>
  );
};

export default CertificationsList;

CertificationsList.protoTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  credentialId: PropTypes.string,
  credentialURL: PropTypes.string.isRequired,
  issueDate: PropTypes.instanceOf(Date).isRequired,
};
