import Card from "@/components/Card";

import CopyButton from "@/components/CopyButton";

import { calendarSubscription } from "@/styles/kalender.module.css";

import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CalendarSubscription({ calendar_id, children }) {
	return (
		<div className={calendarSubscription}>
			<p>{children}</p>
			<Card
				link={`webcal://calendar.google.com/calendar/ical/${calendar_id}/public/basic.ics`}
			>
				<FontAwesomeIcon icon={faApple} /> iCal
			</Card>
			<Card
				link={`https://calendar.google.com/calendar/render?cid=https://calendar.google.com/calendar/ical/${calendar_id}/public/basic.ics`}
			>
				<FontAwesomeIcon icon={faAndroid} /> Google Kalender
			</Card>
			<CopyButton text={calendar_id}>
				<FontAwesomeIcon icon={faCopy} /> Kopiera kalender id
			</CopyButton>
		</div>
	);
}
