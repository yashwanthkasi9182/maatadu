import type { ReactNode } from 'react';
import { ArrowRight, Bookmark, Check, ChevronRight } from 'lucide-react';
import { courses, roman } from '../content';
import type { Language, Phrase } from '../types';
export function PhraseView({phrase,course,compact=false}:{phrase:Phrase;course:Language;compact?:boolean}) {
  const familiar=courses[course].familiar;
  return <div className={`phrase ${compact?'compact':''}`}><p className="target" lang={course}>{phrase[course]}</p><p className="roman">{roman(phrase,course)}</p><div className="translation"><span lang={familiar}>{phrase[familiar]}</span><span className="meaning">{phrase.en}</span></div></div>;
}
export function Pill({children,tone=''}:{children:ReactNode;tone?:string}){return <span className={`pill ${tone}`}>{children}</span>;}
export function SectionTitle({eyebrow,title,description,action}:{eyebrow?:string;title:string;description?:string;action?:ReactNode}){return <div className="section-title"><div>{eyebrow&&<p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1>{description&&<p className="muted">{description}</p>}</div>{action}</div>;}
export function ActionCard({icon,title,description,onClick,badge}:{icon:ReactNode;title:string;description:string;onClick:()=>void;badge?:string}){return <button className="action-card" onClick={onClick}><span className="icon-square">{icon}</span><span className="action-copy"><strong>{title}</strong><span>{description}</span></span>{badge&&<span className="small-badge">{badge}</span>}<ChevronRight size={18}/></button>;}
export function SaveButton({saved,onClick}:{saved:boolean;onClick:()=>void}){return <button className={`icon-button ${saved?'saved':''}`} aria-label={saved?'Unsave word':'Save word'} aria-pressed={saved} onClick={onClick}><Bookmark size={18} fill={saved?'currentColor':'none'}/></button>;}
export function ContinueButton({children,onClick,disabled=false}:{children:ReactNode;onClick:()=>void;disabled?:boolean}){return <button className="button primary" disabled={disabled} onClick={onClick}>{children}<ArrowRight size={18}/></button>;}
export function Empty({title,children}:{title:string;children:ReactNode}){return <div className="empty"><span className="icon-square"><Check size={22}/></span><h3>{title}</h3><p className="muted">{children}</p></div>;}
