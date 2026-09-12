import { useRef, useState, type KeyboardEvent } from 'react'
import { ArrowDownToLine, ArrowUpRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectContent, ProjectSection, P } from '../components/ProjectContent'
import ProjectPager from '../components/ProjectPager'
import Sidenav from '../components/Sidenav'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import './BoardGameAI.css'

const base = '/assets/board-game-ai/'
const tabs = [
  { id: 'contribution', label: 'My role' },
  { id: 'gomoku', label: 'GomokuAI' },
  { id: 'xiangqi', label: 'XiangqiAI' },
  { id: 'learning', label: 'Development process' },
  { id: 'experiments', label: 'Training records' },
  { id: 'playing', label: 'From training to play' },
]
const runs = [
  { slug: 'gomoku', name: 'GomokuAI', run: 'gui_v2', range: '1–100', note: 'The opening iterations show a steep drop in policy loss, followed by a much flatter curve. That is useful training feedback, but lower loss alone does not establish playing strength.' },
  { slug: 'xiangqi', name: 'XiangqiAI', run: 'strategic_v2', range: '491–1212', note: 'This run continues from an existing checkpoint. Its loss stays within a narrower band, so it should not be compared directly with Gomoku’s early training curve. Arena matches and reference opponents provide a separate view of progress.' },
]

function Figure({ name, caption, alt, web = false }: { name: string; caption: string; alt: string; web?: boolean }) {
  const width = web ? 1650 : name === 'xiangqi-training' ? 1080 : 960
  const height = web ? name === 'gomoku-web' ? 1338 : 1445 : name === 'xiangqi-training' ? 780 : 700
  return <figure className="ai-figure">
    <figcaption>{caption}</figcaption>
    <a href={`${base}${name}.webp`} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${caption}`}>
      <picture>
        {web && <source media="(max-width:600px)" srcSet={`${base}${name}-mobile.webp`} width="585" height="1266" />}
        <img src={`${base}${name}.webp`} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
      </picture>
    </a>
  </figure>
}

function TrainingRecords() {
  const [active, setActive] = useState(0)
  const buttons = useRef<(HTMLButtonElement | null)[]>([])
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') next = 1 - index
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = 1
    else return
    event.preventDefault()
    setActive(next)
    buttons.current[next]?.focus()
  }
  return <div className="ai-records">
    <div className="ai-records__tabs" role="tablist" aria-label="Training run">
      {runs.map((run, index) => <button key={run.slug} id={`record-tab-${run.slug}`} type="button" role="tab"
        aria-selected={active === index} aria-controls={`record-${run.slug}`} tabIndex={active === index ? 0 : -1}
        ref={element => { buttons.current[index] = element }} onClick={() => setActive(index)} onKeyDown={event => navigate(event, index)}>{run.name}</button>)}
    </div>
    {runs.map((run, index) => <div key={run.slug} id={`record-${run.slug}`} role="tabpanel" tabIndex={0}
      aria-labelledby={`record-tab-${run.slug}`} hidden={active !== index}>
      <figure className="ai-figure ai-chart">
        <figcaption>{run.run} · Iterations {run.range} · Recorded training loss</figcaption>
        {(['dark', 'light'] as const).map(theme => <a key={theme} className={`ai-chart__${theme}`} href={`${base}${run.slug}-loss-${theme}.png`} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${run.name} loss chart`}>
          <picture><source media="(max-width:600px)" srcSet={`${base}${run.slug}-loss-${theme}-mobile.webp`} width="570" height="1050" />
            <img src={`${base}${run.slug}-loss-${theme}.webp`} width="1800" height="600" alt={`${run.name} policy and value loss over iterations ${run.range}, plotted from the complete recorded run`} loading="lazy" />
          </picture>
        </a>)}
      </figure>
      <p className="ai-records__note">{run.note}</p>
      <a className="text-link" href={`${base}${run.slug}-loss.csv`} download>Download plotted data <ArrowDownToLine size={16} aria-hidden="true" /></a>
    </div>)}
  </div>
}

export default function BoardGameAI() {
  useDocumentTitle('Board Game AI')
  return <div className="project-page ai-page">
    <header className="ai-intro shell">
      <p className="eyebrow">AI & EXPERIMENTS / PERSONAL SERIES</p>
      <h1>Board Game AI</h1>
      <p className="ai-intro__lead">From five in a row to Chinese chess.</p>
      <div className="ai-intro__details">
        <p>I led the development of GomokuAI and XiangqiAI through coding agents, defining project goals, guiding experiments and shaping the playable experience. All implementation code was produced by coding agents. My contribution focused on deciding what to build, what to test, and how to respond to training results and playtesting feedback.</p>
        <dl className="ai-facts">
          <div><dt>MY ROLE</dt><dd>Project Direction · Experiment Design · UX Iteration</dd></div>
          <div><dt>CODE</dt><dd>Implemented by coding agents</dd></div>
          <div><dt>STACK</dt><dd>Python · PyTorch · C++</dd></div>
          <div><dt>INTERFACES</dt><dd>Desktop · Browser</dd></div>
        </dl>
      </div>
      <div className="ai-board-pair">
        <a className="ai-board" href="#gomoku"><span className="ai-board__name">GomokuAI <ArrowRight size={17} aria-hidden="true" /></span><span className="ai-board__image"><img src={`${base}gomoku-board.webp`} alt="Actual GomokuAI board after twelve legal moves, with black and white stones on a nine by nine grid" width="660" height="660" /></span><span className="ai-board__meta">9 × 9 board / Five in a row</span></a>
        <a className="ai-board" href="#xiangqi"><span className="ai-board__name">XiangqiAI <ArrowRight size={17} aria-hidden="true" /></span><span className="ai-board__image"><img src={`${base}xiangqi-board.webp`} alt="Actual XiangqiAI board after eight legal moves, showing Chinese chess pieces, the river and palaces" width="664" height="736" /></span><span className="ai-board__meta">9 × 10 board / Chinese chess</span></a>
      </div>
      <p className="ai-intro__caption">Captured from the running game renderers · Neural MCTS against a heuristic opponent</p>
    </header>
    <Sidenav tabs={tabs} />
    <ProjectContent>
      <ProjectSection id="contribution" title="My contribution">
        <div className="ai-details">
          <div><h3>Set the direction</h3><p>Define the goals and identify the next problem to solve, from underused hardware to shallow playing strategy and access through a browser.</p></div>
          <div><h3>Guide experiments</h3><p>Request A/B comparisons, review results with the agents, and decide which changes to retain, roll back or observe longer. Keep speed and playing strength separate.</p></div>
          <div><h3>Stage the work</h3><p>Break development into manageable steps, request commit checkpoints and preserve trained models so experiments can be compared and changes reversed.</p></div>
          <div><h3>Iterate the experience</h3><p>Use hands-on testing and feedback from other players to identify friction, then direct improvements to progress feedback, mobile controls, spectating and takebacks.</p></div>
        </div>
      </ProjectSection>
      <ProjectSection id="gomoku" title="Start small. Measure everything.">
        <P>Gomoku gave me a compact starting point: a 9 × 9 board, two colours and a five-in-a-row goal. A policy/value network suggests moves and estimates outcomes; Monte Carlo tree search (MCTS) explores those suggestions. Self-play generates new examples, while win, block and fork tests check basic tactical behaviour.</P>
        <P>I noticed that training was not making full use of the RTX 3090 and asked the coding agent to investigate before changing the system. Its profiling pointed to CPU search, small inference batches and communication between workers. The network’s training step was only a small part of the total time.</P>
        <P>I asked for A/B validation of the proposed optimisations. Running several games inside each worker was slower in the agent’s full-workload measurements, so that approach was rolled back. The retained implementation batches multiple search leaves, uses shared memory for inference, and runs evaluation games in separate processes.</P>
        <figure className="ai-benchmark">
          <figcaption>Gomoku evaluation · Agent-run local A/B test</figcaption>
          <dl>
            <div><dt>Threaded evaluation</dt><dd><span className="ai-benchmark__bar ai-benchmark__bar--before" aria-hidden="true" /><strong>31.01<span> s</span></strong></dd></div>
            <div><dt>Multiprocess evaluation</dt><dd><span className="ai-benchmark__bar ai-benchmark__bar--after" aria-hidden="true" /><strong>12.51<span> s</span></strong></dd></div>
          </dl>
          <p>2.48× faster in this test. Same iteration-10 checkpoint against V1, 8 games × 100 MCTS; approximately 50,245 evaluated leaves and a 4–4 result in both runs. RTX 3090 / i7-14700K. This measures evaluation time, not an entire training run.</p>
        </figure>
      </ProjectSection>
      <ProjectSection id="xiangqi" title="Teach more than tactics">
        <P>Xiangqi introduced different piece movements, king safety, repetition and much longer games. After extended training, playtesting with a more experienced player exposed a useful gap: the model attacked eagerly, but lacked a convincing longer-term strategy.</P>
        <P>I brought that feedback into the development discussion. After reviewing the agent’s analysis, I chose to prioritise search quality, retained knowledge and rule history, and directed the agent to implement the following experiment.</P>
        <dl className="ai-comparison">
          <div><dt>Deeper training search</dt><dd>Replace adaptive shallow search with 400 MCTS simulations for every self-play move, including the opening.</dd></div>
          <div><dt>Memory & prior knowledge</dt><dd>Expand replay from 100,000 to 500,000 positions. Mix 90% self-play with 10% recorded-game examples, using the latter for policy training only.</dd></div>
          <div><dt>History-aware rules</dt><dd>Extend the input from 16 to 21 channels so repetition and checking/chasing responsibility are visible to the model. Add WXF-aligned automatic adjudication.</dd></div>
        </dl>
        <P>The agent migrated the last arena-validated best model into the new run. Initialising the added input-channel weights to zero preserved the old model’s outputs. I questioned the apparent change in iteration number and reviewed the distinction between the latest training state and the last validated best model; the earlier checkpoints remained available.</P>
        <P>I later requested separate A/B tests and follow-up reviews of longer training runs. Larger batches could improve a short benchmark without making every training round faster. Those findings shaped the next decision: speed, loss and playing strength each needed their own evidence.</P>
      </ProjectSection>
      <ProjectSection id="learning" title="Direct the development process">
        <P>The agents implemented a repeatable learning loop: search improves the move targets used for training, and evaluation decides whether a candidate becomes the next best model. My role was to guide priorities and request evidence at each stage before continuing.</P>
        <figure className="ai-loop">
          <figcaption>Training architecture shared by the two projects</figcaption>
          <ol>
            <li><span>01</span><h3>Self-play</h3><p>The current model plays through the rules engine.</p></li>
            <li><span>02</span><h3>Search targets</h3><p>MCTS visits and game outcomes enter the replay buffer.</p></li>
            <li><span>03</span><h3>Train</h3><p>Policy and value heads learn from sampled positions.</p></li>
            <li><span>04</span><h3>Evaluate</h3><p>Arena matches compare the candidate with the best model.</p></li>
          </ol>
          <p className="ai-loop__return">Promoted model → next round of self-play</p>
        </figure>
        <div className="ai-details">
          <div><h3>Profile before porting</h3><p>Based on profiling results, I prioritised Xiangqi’s rules-engine bottleneck and directed the agent to implement and validate a C++ acceleration path. I requested a commit checkpoint before this larger change; the implementation also retained a tested Python fallback.</p></div>
          <div><h3>Make waiting understandable</h3><p>I flagged that long evaluations looked frozen and requested visible progress and activity feedback. When the new indicator rendered incorrectly, I reported that too. The agent implemented and corrected the UI, while saved checkpoints supported safe pauses and resumes.</p></div>
        </div>
        <P>The two projects share this approach, but use separate rules engines, input representations and checkpoints. Gomoku selects a placement on 81 intersections; Xiangqi selects a source and destination through an 8,100-entry policy space, masked to legal moves.</P>
      </ProjectSection>
      <ProjectSection id="experiments" title="The experiment, recorded">
        <P>I reviewed training results with the coding agents to decide when to continue, investigate or change an experiment. These plots come from saved runs: policy loss tracks the network’s move targets, and value loss tracks outcome prediction. Each view includes the full recorded iteration range, without smoothing.</P>
        <TrainingRecords />
        <Figure name="xiangqi-training" caption="Xiangqi training dashboard — saved history, evaluation and resume controls" alt="English Xiangqi Training Dashboard showing recorded loss, evaluation scores, internal relative strength and training controls; training is idle" />
        <p className="ai-fineprint">Snapshot: September 2026. The dashboard’s Relative Strength is an internal comparison between model versions, not a public chess rating. Reference scores depend on the opponent and evaluation settings.</p>
      </ProjectSection>
      <ProjectSection id="playing" title="From training to play">
        <P>I requested responsive browser interfaces so playing and spectating did not depend on opening the training desktop, using the Xiangqi experience as a reference for Gomoku. The agents implemented both with a FastAPI host, adjustable MCTS budgets, live state updates and checkpoint reloads.</P>
        <Figure web name="gomoku-web" caption="GomokuAI in the browser — choose a side, adjust search and follow the latest move" alt="Real Chinese-language GomokuAI browser interface with a ten-move board, GomokuZero iteration 97, Neural MCTS controls and a highlighted latest move" />
        <P>During use, I identified a disruptive spectator issue: the end-of-game dialog stayed open when someone started a new game. I reported the expected behaviour, and the agent corrected the dialog’s response to live state updates. My mobile feedback also prompted a more compact control area and a bounded More panel.</P>
        <Figure web name="xiangqi-web" caption="XiangqiAI in the browser — live board state and up to three takebacks per game" alt="Real Chinese-language XiangqiAI browser interface with an eight-move board, QiZero iteration 1210, latest-move highlights and the undo control" />
        <p className="ai-fineprint">Actual desktop and mobile browser captures, with the original Chinese UI and English captions. Saved neural models run on CPU with 32 MCTS simulations for these captures. On-screen percentages are model-derived position estimates, not calibrated win probabilities.</p>
        <P>The browser displays the game while the Python host runs inference. These remain ongoing local experiments: the interfaces make the models playable, and stronger strategic play still needs broader evaluation.</P>
        <Link className="primary-link" to="/about#contact">Discuss this project <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </ProjectSection>
    </ProjectContent>
    <ProjectPager prevHref="/paris-tour" nextHref="/harvest-onslaught" />
  </div>
}
