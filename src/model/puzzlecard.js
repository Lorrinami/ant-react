//注意 dva model 的定义。一个基本的 dva model 最少具备两个成员：namespace 和 state。
//namespace 来作为一个 model 的唯一标识，state 中就是该 model 管理的数据。
export default {
    namespace:'puzzlecards',
    state:[
        { id: 1,
            setup: 'Did you hear about the two silk worms in a race?',
            punchline: 'It ended in a tie',
          },
          {
            id: 2,
            setup: 'What happens to a frog\'s car when it breaks down?',
            punchline: 'It gets toad away',
          },
    ],
}