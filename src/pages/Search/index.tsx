import React from 'react';
import CardDev from '../../components/CardDev';
import Button from '../../components/Button';
import './styles.css';

function Search() {
  return (
    <>
            <ul className="flex-container nowrap">
                <li className="flex-item">
                    <Button buttonSize='btn--wide' buttonColor='blue'>
                    PHP
                    </Button>
                </li>
                <li className="flex-item">
                    <Button buttonSize='btn--wide' buttonColor='blue'>
                        React
                    </Button>
                </li>
                <li className="flex-item">
                    <Button buttonSize='btn--wide' buttonColor='blue'>
                    Vue
                    </Button>
                </li>
            </ul>

            <div className="flex-container wrap">
                 <div className="row">
                    <div className="column"><CardDev name="Fabio" title="Software Developer" /></div>
                    <div className="column"><CardDev name="Maria" title="UX Developer" /></div>
                    <div className="column"><CardDev name="Catherine" title="OPS Developer" /></div>
                </div>
            </div>

    </>
  );
}

export default Search;
