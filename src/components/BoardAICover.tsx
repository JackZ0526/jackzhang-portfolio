import './BoardAICover.css'

/** A cover assembled from the two real interfaces, without generated gameplay. */
export default function BoardAICover() {
  return <div className="board-ai-cover" role="img" aria-label="Board Game AI: actual GomokuAI and XiangqiAI browser interfaces, showing the boards, trained models and search controls">
    <div className="board-ai-cover__heading" aria-hidden="true">
      <span>Board Game AI</span>
      <span>GomokuAI / XiangqiAI</span>
    </div>
    <div className="board-ai-cover__screens" aria-hidden="true">
      <img src="/assets/board-game-ai/gomoku-web.webp" alt="" width="1650" height="1338" loading="lazy" />
      <img src="/assets/board-game-ai/xiangqi-web.webp" alt="" width="1650" height="1445" loading="lazy" />
    </div>
  </div>
}
