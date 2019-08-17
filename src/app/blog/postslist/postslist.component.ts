import {AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';
// import { Post } from 'src/app/blog/postslist/post/post';
import {PostComponent} from './post/post.component';

@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.css']
})
export class PostslistComponent implements AfterViewInit {
// @ViewChild('postRef') manage-posts: PostComponent;
// @ViewChild('container', {read: ElementRef}) containerDiv: ElementRef;
// @ViewChild('contRef') initRef: ElementRef;
// @ContentChild(PostComponent) child: PostComponent;

  // postsList: Post[];
  constructor() { }

  // ngOnInit() {
  //   // this.postsList = [
  //     {
  //      id: 1,
  //      likes: 0,
  //      headline: 'Angular Rox',
  //      author: null,
  //      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quid attinet de rebus tam apertis plura requirere? Hinc ceteri ' +
  //        'particulas arripere conati suam quisque videro voluit afferre sententiam. Si quicquam extra virtutem habeatur in bonis. Illa videamus, ' +
  //        '\quae a te de amicitia dicta sunt. Huius, Lyco, oratione locuples, rebus ipsis ielunior.\n' +
  //        '\n' + 'Cetera illa adhibebat, quibus demptis negat se Epicurus intellegere quid sit bonum. Incommoda autem et commoda-ita enim estmata et ' +
  //        'dustmata appello-communia esse voluerunt, paria noluerunt. Omnia contraria, quos etiam insanos esse vultis. Hoc est vim afferre, Torquate, ' +
  //        'sensibus, extorquere ex animis cognitiones verborum, quibus inbuti sumus. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. ' +
  //        'Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. Tum Torquatus: Prorsus, inquit, assentior;\n' +
  //        '\n' + 'Duo Reges: constructio interrete. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Verum esto: verbum ipsum voluptatis ' +
  //        'non habet dignitatem, nec nos fortasse intellegimus. Fortasse id optimum, sed ubi illud: Plus semper voluptatis? Sed quanta sit alias, ' +
  //        'nunc tantum possitne esse tanta. Quis non odit sordidos, vanos, leves, futtiles? Illa argumenta propria videamus, cur omnia sint paria ' +
  //        'peccata.'
  //     },
  //     {
  //       id: 2,
  //       likes: 0,
  //       headline: 'Angular To The Moon',
  //       author: 'Dror Dvash',
  //       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quid attinet de rebus tam apertis plura requirere? Hinc ceteri ' +
  //         'particulas arripere conati suam quisque videro voluit afferre sententiam. Si quicquam extra virtutem habeatur in bonis. Illa videamus, ' +
  //         '\quae a te de amicitia dicta sunt. Huius, Lyco, oratione locuples, rebus ipsis ielunior.\n' +
  //         '\n' + 'Cetera illa adhibebat, quibus demptis negat se Epicurus intellegere quid sit bonum. Incommoda autem et commoda-ita enim estmata et ' +
  //         'dustmata appello-communia esse voluerunt, paria noluerunt. Omnia contraria, quos etiam insanos esse vultis. Hoc est vim afferre, Torquate, ' +
  //         'sensibus, extorquere ex animis cognitiones verborum, quibus inbuti sumus. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. ' +
  //         'Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. Tum Torquatus: Prorsus, inquit, assentior;\n' +
  //         '\n' + 'Duo Reges: constructio interrete. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Verum esto: verbum ipsum voluptatis ' +
  //         'non habet dignitatem, nec nos fortasse intellegimus. Fortasse id optimum, sed ubi illud: Plus semper voluptatis? Sed quanta sit alias, ' +
  //         'nunc tantum possitne esse tanta. Quis non odit sordidos, vanos, leves, futtiles? Illa argumenta propria videamus, cur omnia sint paria ' +
  //         'peccata.'
  //     },
  //     {
  //       id: 3,
  //       likes: 0,
  //       headline: 'Angular Pros',
  //       author: 'Dror Dvash',
  //       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quid attinet de rebus tam apertis plura requirere? Hinc ceteri ' +
  //         'particulas arripere conati suam quisque videro voluit afferre sententiam. Si quicquam extra virtutem habeatur in bonis. Illa videamus, ' +
  //         '\quae a te de amicitia dicta sunt. Huius, Lyco, oratione locuples, rebus ipsis ielunior.\n' +
  //         '\n' + 'Cetera illa adhibebat, quibus demptis negat se Epicurus intellegere quid sit bonum. Incommoda autem et commoda-ita enim estmata et ' +
  //         'dustmata appello-communia esse voluerunt, paria noluerunt. Omnia contraria, quos etiam insanos esse vultis. Hoc est vim afferre, Torquate, ' +
  //         'sensibus, extorquere ex animis cognitiones verborum, quibus inbuti sumus. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. ' +
  //         'Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. Tum Torquatus: Prorsus, inquit, assentior;\n' +
  //         '\n' + 'Duo Reges: constructio interrete. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Verum esto: verbum ipsum voluptatis ' +
  //         'non habet dignitatem, nec nos fortasse intellegimus. Fortasse id optimum, sed ubi illud: Plus semper voluptatis? Sed quanta sit alias, ' +
  //         'nunc tantum possitne esse tanta. Quis non odit sordidos, vanos, leves, futtiles? Illa argumenta propria videamus, cur omnia sint paria ' +
  //         'peccata.'
  //     }
  //   ];
  // }

  addLike(id: number) {
    // console.log('child', this.child);
    // console.log('CD', this.containerDiv);
    // this.postsList.forEach(post => post.id === id ? post.likes++ : null);
  }

  ngAfterViewInit() {
    // console.log(this.child);
  }

}
