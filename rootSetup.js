const INITIAL_STATE = { emoji: 'ʕ￫ᴥ￩ʔ' };
const moodReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'Happy':
			return { ...state, emoji: 'ヽ(•‿•)ノ' };
		case 'Sad':
			return { ...state, emoji: '(⌣́_⌣̀)' };
		case 'Angry':
			return { ...state, emoji: 'Ծ_Ծ' };
		case 'Confused':
			return { ...state, emoji: '(-_-)ゞ゛' };
		default:
			return state;
	}
};
const store = Redux.createStore(moodReducer);

const displayEmoji = (emoji) => {
	$('#emoji').text(emoji);
};

$('button').on('click', (e) => {
	const type = $(e.target).text();
	store.dispatch({ type });
	const emoji = store.getState().emoji;
	displayEmoji(emoji);
});

displayEmoji(store.getState().emoji);
