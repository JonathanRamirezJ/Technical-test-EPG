import { describe, it, expect} from 'vitest';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/Store';
import i18next from "i18next";
import { I18nextProvider } from 'react-i18next';
import HomePage from './HomePage.page';

// Global files
import global_en from "../../Translation/En/global.json";
import global_es from "../../Translation/Es/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

function renderWithProviders(component:any) {
  return render(
    <I18nextProvider i18n={i18next}>
			<Provider store={store}>
      	{component}
			</Provider>
    </I18nextProvider>
  );
}

describe('All Test for technical test - EPG', () => {
	it('renders loader initially', () => {
    renderWithProviders(<HomePage />);
		const loader = document.querySelectorAll<HTMLElement>('.loader');

    expect(loader[0]).toBeInTheDocument();
  });

  it('renders button after loading', async () => {
    renderWithProviders(<HomePage />);
		const button = screen.getByText("Mostrar EPG");

    expect(button).toBeInTheDocument();
  });

	it('modal opens on button click', async () => {
		renderWithProviders(<HomePage />);
		const button = screen.getByText("Mostrar EPG");
    
		fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Hoy")).toBeInTheDocument();
    });
  });

	it('modal closes on modal close button click', async () => {
		renderWithProviders(<HomePage />);
		const button = screen.getByText("Mostrar EPG");
    
		fireEvent.click(button);
		
    await waitFor(() => {
      fireEvent.click(screen.getByText('X'));
      expect(screen.queryByText("Mostrar EPG")).toBeInTheDocument();
    });
  });
});
