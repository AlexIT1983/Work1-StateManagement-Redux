// Наш компонент Information
//
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from "../../constants";
import { useReduxState } from "../../redux-manager";
import { InformationLayout } from "./information-layout";

export const Information = () => {
	const { status, currentPlayer } = useReduxState();

	const playerAction = PLAYER_ACTION[status]; // выбираем действие
	const playerName = PLAYER_NAME[currentPlayer]; // выбираем текущего игрока

	const information =
		status === STATUS.DRAW ? "Ничья" : `${playerAction}: ${playerName}`;

	return <InformationLayout information={information} />;
};
