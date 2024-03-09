// Game крестики нолики c Redux (8. Основы Redux)

import { useDispatch } from "./redux-manager";
import { GameLayout } from "./game-lyaout";
import { RESTART_GAME } from "./actions";

export const Game = () => {
	const dispatch = useDispatch();

	const handleRestart = () => {
		dispatch(RESTART_GAME);
	};

	return <GameLayout handleRestart={() => handleRestart(handleRestart)} />;
};
