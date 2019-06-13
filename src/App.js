import React, {Component} from 'react';
import ProgressBar from './ProgressBar';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);

        this.state = {
            widthBar: 0,
            documentHeight: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        const height = document.getElementById('container').clientHeight;
        this.setState({documentHeight: height});
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let scroll = window.pageYOffset,
            dh = this.state.documentHeight,
            wh = window.innerHeight,
            value = (scroll / (dh - wh)) * 100;

        this.setState({
            widthBar: value
        });
    }

    render() {
        return (
            <div className="App">
                <div className="Navbar">
                    <span>Page Scroll Progress Indicator</span>
                </div>
                <ProgressBar color="#61DAFB" width={this.state.widthBar}/>
                <div id="container">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam ligula, accumsan in elit eu, rutrum
                            ornare dui. Vivamus in tristique risus. Etiam faucibus lacinia eros. Duis consectetur ullamcorper magna,
                            ac fermentum augue tincidunt non. Mauris ac porta justo. Cras a pulvinar leo, ac tempor elit. Proin
                            accumsan pellentesque lectus, eu ultricies ipsum luctus non. Donec quis tortor ligula. Nunc pretium sem
                            eu elit scelerisque, at semper nisi pulvinar. Interdum et malesuada fames ac ante ipsum primis in
                            faucibus. Cras non dapibus massa.
                        </p>
                        <p>
                            Praesent sollicitudin, enim ut lobortis dignissim, diam leo malesuada urna, quis pulvinar dui sem non
                            ante. Sed nec ex nulla. Vivamus sed mauris congue, finibus sapien nec, maximus diam. Quisque ac cursus
                            felis, nec rutrum purus. Praesent iaculis enim vitae diam consectetur volutpat. Sed scelerisque leo at
                            elementum lobortis. Integer vel consectetur justo.
                        </p>
                        <p>
                            Duis eu lacinia tellus, eu elementum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et
                            ultrices posuere cubilia Curae; In pharetra tortor tellus, eu semper ipsum tristique in. Vestibulum ante
                            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec volutpat sed nisi at
                            laoreet. Cras quis condimentum orci, quis malesuada tortor. Nullam dapibus porttitor lacinia. In
                            consequat nibh et sem porta ullamcorper id vitae ex. Praesent augue neque, tincidunt et ligula id,
                            sagittis porta lectus. Mauris egestas risus nisl, at fermentum diam porta ac. Sed id lectus neque.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent nec
                            consectetur nibh. Mauris tincidunt luctus magna, ac lacinia nulla sollicitudin eget. Sed mattis interdum
                            velit vel pharetra. Nulla facilisi.
                        </p>
                        <p>
                            Nunc eros tellus, mollis vitae tristique quis, elementum in dui. Donec eget arcu eu risus placerat
                            mattis quis sed mauris. Fusce a sagittis nunc. Aliquam erat volutpat. Duis placerat elementum lectus, et
                            fringilla arcu lacinia eget. Fusce vehicula, nisi sit amet congue malesuada, lorem magna sollicitudin
                            ante, id dignissim erat massa a ante. Pellentesque finibus dolor eget dolor imperdiet viverra. Praesent
                            cursus justo et felis pharetra, sed volutpat purus tincidunt. Nunc in leo massa.
                        </p>
                        <p>
                            Sed lobortis est vitae lorem tempus efficitur. Praesent vitae dolor augue. Mauris ullamcorper ante eget
                            porta maximus. Etiam congue molestie imperdiet. Nulla efficitur lectus vitae nisi tincidunt rhoncus.
                            Nulla ac venenatis augue. Nulla iaculis tincidunt laoreet. Curabitur euismod metus urna, interdum
                            dignissim eros dictum sit amet. Cras condimentum laoreet urna, in tristique ante pellentesque vitae.
                            Etiam in erat vitae magna lobortis ornare a a erat.
                        </p>
                        <p>
                            Integer at felis felis. Phasellus ut aliquet augue. Pellentesque metus urna, maximus non ipsum blandit,
                            finibus sollicitudin eros. Morbi eu diam et justo vehicula ultricies elementum sed purus. Pellentesque
                            elementum nec ex a pharetra. Phasellus eu dapibus urna. Fusce dapibus pharetra ex in consequat. Nunc
                            tempus diam a vestibulum placerat. Sed sollicitudin posuere blandit. Proin fermentum lorem consequat
                            odio mollis, et faucibus elit commodo. Vestibulum odio nulla, ultrices eget est eu, aliquam finibus
                            nisl. Nam nec ullamcorper diam. Aliquam dolor magna, tincidunt nec nibh a, malesuada ultrices felis.
                        </p>
                        <p>
                            Ut id volutpat ipsum. Duis tincidunt ut nisi aliquam ultricies. Proin volutpat est vitae dolor egestas
                            vulputate. Aenean porta maximus tempor. Aliquam ac fringilla nibh. Fusce ipsum felis, auctor consectetur
                            efficitur vitae, aliquam eget orci. Nunc facilisis nulla id rhoncus venenatis. Etiam porttitor massa vel
                            luctus condimentum. Suspendisse potenti. Morbi scelerisque consectetur est, et pulvinar arcu mollis sit
                            amet. Sed ullamcorper sapien sed egestas faucibus. Proin volutpat placerat convallis.
                        </p>
                        <p>
                            Cras sit amet tempus libero. Phasellus vitae imperdiet lorem. Integer ex augue, congue id fringilla sit
                            amet, porttitor ac justo. Nunc non efficitur massa, sit amet imperdiet lorem. Maecenas fringilla dui
                            vulputate eleifend tempor. Sed pellentesque arcu eu ipsum rhoncus, ac elementum risus condimentum.
                            Aliquam gravida vitae quam at sodales. Donec semper rutrum lectus, sit amet vulputate ex sodales a.
                        </p>
                        <p>
                            Pellentesque elementum neque ac dolor ultrices rutrum. Integer sit amet diam vulputate, placerat risus
                            et, lacinia mauris. Donec molestie aliquam nisl, non interdum est fermentum eget. Maecenas molestie ac
                            lacus nec viverra. Duis semper nisi enim, quis vulputate felis venenatis sit amet. Integer varius risus
                            vitae risus condimentum, sit amet convallis dolor pharetra. Donec porttitor justo ante, eu hendrerit
                            orci pharetra id. Aliquam sed nisl ante. Proin aliquam velit eu velit rhoncus ornare. Curabitur tempus
                            volutpat risus, eget accumsan tellus fringilla quis. Ut odio risus, eleifend non cursus sed, eleifend ut
                            elit. Vivamus magna arcu, maximus eu sagittis eget, tincidunt quis enim. Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere cubilia Curae; Cras vel purus placerat, fermentum nisl nec,
                            luctus libero. Donec porta vel arcu sed pretium. Aenean tristique mauris eget nunc scelerisque accumsan.
                        </p>
                        <p>
                            Etiam euismod bibendum mollis. In urna velit, tincidunt et pretium sed, vehicula ut sapien. Donec
                            faucibus iaculis turpis eget feugiat. Duis mollis neque ut ex pharetra, ut vestibulum nisl vestibulum.
                            Mauris id vulputate enim, at malesuada dolor. Fusce accumsan quam ut nibh ullamcorper scelerisque. Fusce
                            at vulputate mauris. In hac habitasse platea dictumst.
                        </p>
                        <p>
                            Duis convallis sapien nunc. Nulla sed arcu turpis. Quisque quam metus, fringilla vestibulum semper
                            varius, accumsan ac est. Donec accumsan pharetra nibh vitae accumsan. Nam placerat quam a nisi
                            hendrerit, id efficitur nisl iaculis. Integer quis ornare velit. Fusce eu urna semper, vulputate leo
                            sed, ultricies ligula. Curabitur ullamcorper tempus justo et aliquam. Mauris at lectus scelerisque,
                            gravida neque non, vehicula mauris.
                        </p>
                        <p>
                            Nunc dapibus tortor vel ante fringilla, at dictum nunc mattis. Phasellus tincidunt arcu sit amet lacus
                            pretium hendrerit. Aenean cursus velit rhoncus sagittis cursus. Donec dolor nisi, placerat eget porta
                            sit amet, molestie et massa. Etiam sed egestas ligula, in tincidunt orci. Integer egestas ornare sapien
                            eu dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Donec eget lorem efficitur, ornare arcu sed, ornare nibh. Duis non odio quam. Praesent non mi nec ante
                            facilisis dapibus quis ac risus. Ut finibus ex eu interdum euismod. Suspendisse egestas efficitur leo
                            eget venenatis. Phasellus tortor nulla, posuere sit amet rhoncus tristique, gravida at urna.
                        </p>
                        <p>
                            Vivamus hendrerit eros at convallis vulputate. Phasellus sit amet lacinia urna. Maecenas libero urna,
                            consectetur in pretium ac, mattis ac turpis. Proin ultrices dui sit amet ante sagittis facilisis.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam pretium
                            consequat pulvinar. Sed in auctor elit, sed dapibus dolor. Nunc tincidunt justo sit amet tincidunt
                            tempor. Nam et hendrerit massa. Morbi porttitor ultricies malesuada. Maecenas dolor nisl, ultricies a
                            justo eget, tempus pulvinar diam. Morbi non sem lectus.
                        </p>
                        <p>
                            Donec neque nibh, sodales vitae nisl nec, fermentum laoreet justo. Nulla blandit ligula quam, quis
                            rhoncus erat pharetra convallis. In hac habitasse platea dictumst. In a urna eu elit vulputate cursus.
                            Vivamus id venenatis odio. Ut et leo mattis, maximus magna eget, vulputate purus. Duis maximus commodo
                            odio. Nullam sed vehicula tortor. Vivamus eros massa, porta dapibus porta nec, mattis vel est. Aenean
                            iaculis at nisl a rutrum. Aenean faucibus sagittis mollis.
                        </p>
                        <p>
                            Mauris vulputate lectus ut nisl scelerisque, a convallis nisl vulputate. Duis euismod scelerisque odio a
                            tempor. Vestibulum id urna ligula. Sed nibh sapien, auctor eget vulputate quis, porttitor at est. Aenean
                            ullamcorper justo tristique lorem porta posuere. Nulla at ullamcorper dui. In gravida magna diam, vitae
                            suscipit metus fringilla et. Aliquam convallis, ante vel commodo rutrum, enim arcu aliquet erat, ac
                            pretium neque mi et dolor.
                        </p>
                        <p>
                            Phasellus risus ipsum, venenatis vehicula dolor ut, dictum consectetur mi. Nam ut ex auctor, tempus dui
                            in, congue ex. Mauris non condimentum ex. Praesent placerat in libero a finibus. Nunc facilisis turpis
                            quis libero tincidunt, ut ultrices massa tristique. Mauris quis nibh ut massa elementum eleifend. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. In euismod tempor purus, quis semper mauris aliquam
                            nec. In at fringilla ligula. Aliquam varius, dolor non accumsan porttitor, nibh felis maximus turpis,
                            sit amet consequat est quam quis mauris. Maecenas facilisis risus quis sodales finibus. Integer vel
                            accumsan nibh. Praesent convallis eget metus et facilisis. Pellentesque placerat purus congue tortor
                            fringilla, commodo aliquam orci blandit. Quisque vulputate aliquet ligula, eget sollicitudin lacus
                            condimentum ut.
                        </p>
                        <p>
                            Mauris et urna varius, dictum quam in, eleifend ipsum. Nam non vestibulum mi, vel sagittis lacus. Nam a
                            vestibulum libero. Nunc viverra magna id dictum sodales. Proin ac imperdiet justo, varius vulputate
                            turpis. Mauris volutpat velit dui, vitae auctor sem ultricies vel. Integer vehicula volutpat pharetra.
                            Proin varius justo ut facilisis consequat.
                        </p>
                        <p>
                            Pellentesque posuere bibendum dolor sed aliquet. Mauris quis lacus sodales lectus auctor ornare. Aliquam
                            erat volutpat. Phasellus sed suscipit magna. Vestibulum rhoncus luctus arcu. Nullam sit amet diam nisl.
                            In aliquet scelerisque augue vel dignissim. Nulla convallis, magna aliquet rhoncus aliquet, nibh ligula
                            ultrices quam, vitae efficitur lacus mauris id justo. Ut iaculis diam eget nisl ultricies accumsan.
                        </p>
                        <p>
                            Fusce sit amet tristique est. Maecenas congue tortor metus, non condimentum nunc dapibus et. Phasellus
                            vel ipsum efficitur, convallis elit nec, rutrum dolor. Morbi ullamcorper placerat elit at malesuada. Sed
                            eleifend consectetur quam, nec tincidunt velit vestibulum ac. Curabitur convallis pharetra diam, quis
                            bibendum nibh. Fusce quis scelerisque urna, sit amet tincidunt lacus.
                        </p>
                        <p>
                            Morbi venenatis eget odio in ornare. Maecenas interdum ante lorem, a placerat nibh eleifend vitae.
                            Mauris aliquet aliquet odio quis scelerisque. Integer eget lorem vitae magna maximus blandit at ultrices
                            sem. Morbi laoreet lorem lectus, vitae tincidunt justo egestas quis. Vestibulum quis diam placerat,
                            tempor dui id, dapibus enim. Maecenas accumsan quam ante, sed tristique velit aliquet at. In finibus
                            tellus elementum tellus posuere interdum. Aenean maximus turpis nunc, vitae pulvinar odio vulputate id.
                            Donec consequat porttitor lectus blandit posuere. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed id nisl pharetra, convallis eros sed, mattis tortor. Fusce augue lectus, elementum et lacus
                            sit amet, imperdiet posuere libero.
                        </p>
                    </div>
            </div>
        );
    }
}

export default App;
