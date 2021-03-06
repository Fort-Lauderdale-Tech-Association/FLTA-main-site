import React, { Component } from 'react';

import alex from './files/alex.png';
import jonathan from './files/jonathan.png';

export class WhoIsFLTA extends Component {
  render() {
    return (
      <section className="whoIsFLTA">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h2 className="green">
                Who is Fort Lauderdale Tech Association?
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-8 col-lg-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-2 col-lg-offset-2 text-center">
            <p className="paragraphs">
              We're a dedicated team of urban real estate and investing enthusiasts who believe everyone should have the ability to achieve the dream of building wealth by owning property – whether as a resident or investor – in smarter, simpler and more accessible ways than exist today.
            </p>
            </div>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-3 col-lg-3 col-xs-offset-2 col-sm-offset-2 col-md-offset-3 col-lg-offset-3 text-center">
            <img src={ alex } />
            <p className="name">
              Alex Lofton
            </p>
            <p className="position">
              co-founder
            </p>
            <p className="sign">
              Real Estate Sales Pro.<br />
              Campaign Genius.
              {/*  potentially change to:
              The campaign genius turned sales pro, obsessed with changing how we all experience where and how we live. Fact: he's not ashamed to show off his dancing skills whenever and wherever.
              The recovering engineer who's housing policy and finance chops make him the ultimate creative real estate investing guru. Fact: [you pick your fun fact]
            */}
            </p>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-3 col-lg-3 col-xs-offset-2 col-sm-offset-2 col-md-offset-0 col-lg-offset-0 text-center">
            <img src={ jonathan } />
            <p className="name">
              Jonathan Asmis
            </p>
            <p className="position">
              co-founder
            </p>
            <p className="sign">
              Housing Policy Guru.<br />
              Recovering Engineer.
            </p>
          </div>
          <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-8 col-lg-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-2 col-lg-offset-2 text-center">
            <p className="paragraphs">
              After meeting at Stanford's business school, Alex and Jonathan fixated on the long-term housing problem in dynamic (and expensive) cities. Using their professional backgrounds to help bring structured investment into people's homes, it became clear that although many people are finding creative ways of paying for home, the whole process can be extremely complicated and intimidating.<br /><br />Jonathan and Alex recognized that the default real estate transaction in cities today is no longer one-house/one-couple, but rather one-house/one-community-of-support. And yet, the existing transaction system is completely ill-equipped to deal with this new reality.<br /><br />Fort Lauderdale Tech Association was born to build the infrastructure necessary to make joining forces to pay for home as simple and painless as possible, giving everyone the chance to invest and live in homes in a smarter, more creative way.
            </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
